import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, NavLink, Link, Route, Switch} from 'react-router-dom';
import Mealboard from './Mealboard';
import Login from './Login';


function textInputForms(placeholder) {
  <label>placeholder</label>
}


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mealboard"> <Mealboard /> </Route>
        <Route path="/login"><Login/></Route>
      </Switch>
      <NavLink to="/mealboard"> Mealboard </NavLink>
      <NavLink to="/login"> login </NavLink>

    </Router>
  );
}

export default App;
