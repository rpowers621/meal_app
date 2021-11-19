import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



function App() {
  
  return (
    <Router>
    <Navbar />
    <div className="g-signin">
      <Login />
    </div>
    <div className="App">
      <Switch>
        <Route path ="/Recipebox"><Recipebox /></Route>
        <Route path ="/Recipepage"><Recipepage /></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;