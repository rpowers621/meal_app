import React from 'react';
import Login from './Login';
import Mealboard from './Mealboard';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Login />
      <div className="App">
        <h2>Plan your Mealboard!</h2>

        <NavLink exact activeClassName="Active" to="/mealboard">Mealboard</NavLink>

        <hr />

        <Switch>
          <Route path="/mealboard" component={Mealboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
