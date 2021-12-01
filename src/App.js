import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="g-signin">
      <Login />
    </div>
    <div className="App">
      <Switch>
        <Route path="/Home"><Home /></Route>
        <Route path ="/Recipebox"><Recipebox /></Route>
        <Route path ="/Recipepage"><Recipepage /></Route>
        <Route path ="/About"><About /></Route>
        <Route path="/Contact"><Contact /></Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;