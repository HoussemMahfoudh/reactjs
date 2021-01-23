import {Component} from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firtname: '', select: 'univ'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
      console.log(event.target.value)
    this.setState({firtname: event.target.value});
  }

  handleSelect(event) {

    this.setState({select: event.target.value});
  }

  handleSubmit(event) {
    alert("Utilisateur: " + this.state.firtname + " Université: " + this.state.select)
  }

  render() {
    return (
        <div class="container">
        <br/>
        <p class="text-center">PROJET REACT</p>
        <hr></hr> 
        <div class="card bg-light">
    <div class="card-body mx-auto" style={{maxWidth:400}}>
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	<p>
		<a href="https://www.twitter.com" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="https://www.twitter.com" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p class="divider-text">
        <span class="bg-light">OR</span>
    </p>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">  <i class="fa fa-user"></i></span>
                    </div>
                    <input firtname={this.state.value} onChange={this.handleChange} class="form-control" placeholder="Full name" type="text"/>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                        <select class="custom-select" style={{maxWidth:400}} value={this.state.select} onChange={this.handleSelect}>
                            <option value="univ" disabled>Université</option>
                            <option value="Sesame">Sesame</option>
                            <option value="Esprit">Esprit</option>
                            <option value="TechUp">Tech'Up</option>
                        </select>
                    </div>
                    <div class="form-group"><button type="submit" class="btn btn-primary btn-block"> Create Account  </button></div>
                </form>
    </div>
    </div>
    </div>

    );
  }
}

export default UserForm;