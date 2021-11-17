import React from 'react';
import Login from './Login';
import Recipepage from './Recipepage';

import Recipebox from './Recipebox';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';




function App() {

  return (
    <Router>
    <Switch>
      <Route path="/Recipebox"> <Recipebox /> </Route>
      <Route path="/login"><Login/></Route>
      <Route path="/Recipepage"><Recipepage/></Route> 
    </Switch>
    <NavLink to="/recipebox"> Recipebox </NavLink>
    <NavLink to="/login"> login </NavLink>
    </Router>
  );
}

export default App;
