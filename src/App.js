import React from 'react';
import Navbar from './Navbar';
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import logo from './logo.png';
import meal from './meal.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import'./App.css'




function App() {
  
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route path ="/Recipebox"><Recipebox /></Route>
        <Route path ="/Recipepage"><Recipepage /></Route>
      </Switch>
  </Router>

    <div className="content">
  
      <div className="text">
          <img className="logo" src={logo} alt="logo"></img>
          <h2> Meal Planning Made Easy</h2>
          <p> Are you in need of a weekly meal plan but can't seem to find one that fits you? The Culinary Army allows you browse through tons of weekly meal plan ideas to find one that suits you or you can create your own delicious meals customized to your preference. The possibilities are endless! </p>
      </div>
      <div class="image2">
          <img className="bowl" src={meal} alt="bowl"></img>
      </div>
    </div>
</>
  

  );
}

export default App;