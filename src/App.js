import React from 'react';
import Login from './Login';
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
      </Switch>
    </div>
  </Router>
  );
}

export default App;