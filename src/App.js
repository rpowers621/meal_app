import React from 'react';
import Navbar from './Navbar';
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  
  return (
    <Router>
    <Navbar />
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