import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, HashRouter, NavLink} from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import UserForm from "./components/FormComponent/UserForm";
import MapsComponent from "./components/MapsComponent/MapsComponent";
import GallerieComponent from "./components/GallerieComponent/Gallerie";
function App() {
  return (
    <HashRouter>
    <div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/user">Subscription</NavLink></li>
        <li><NavLink to="/maps">Maps</NavLink></li>
        <li><NavLink to="/gallerie">Gallerie</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={HomeComponent}></Route>
        <Route path="/user" component={UserForm}/>
        <Route path="/maps" component={MapsComponent}/>
        <Route path="/gallerie" component={GallerieComponent}/>
      </div>
    </div>
  </HashRouter>
  );
}

export default App;
