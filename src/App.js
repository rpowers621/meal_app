import React from 'react';
import Login from './Login';
import Recipepage from './Recipepage';

import Recipebox from './Recipebox';
import Mealboard from './Mealboard';
import Navbar from './Navbar';
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
        <Route path ="/mealboard"><Mealboard /></Route>
        <Route path="/Recipepage"><Recipepage/></Route> 
        <Route path="/Recipebox"> <Recipebox /> </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;