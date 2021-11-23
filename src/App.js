import React from 'react';
import Login from './Login';
<<<<<<< HEAD
import Recipepage from './Recipepage';

import Recipebox from './Recipebox';
import Mealboard from './Mealboard';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

=======
import Navbar from './Navbar';
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> mealboard_cont



function App() {
  
  return (
    <Router>
    <Navbar />
    <div className="g-signin">
      <Login />
    </div>
    <div className="App">
      <Switch>
<<<<<<< HEAD
        <Route path ="/mealboard"><Mealboard /></Route>
        <Route path="/Recipepage"><Recipepage/></Route> 
        <Route path="/Recipebox"> <Recipebox /> </Route>
=======
        <Route path ="/Recipebox"><Recipebox /></Route>
        <Route path ="/Recipepage"><Recipepage /></Route>
>>>>>>> mealboard_cont
      </Switch>
    </div>
  </Router>
  );
}

export default App;