import React from 'react';
import mealprep from './mealprep.jpeg';
import logo from './logo.png';
import "./About.css";


function About() {
  return (
    <div className="About">
      <img className="mealprep" src={mealprep} alt="mealprep" height="450px" width="1425px"></img>
      <div className="text">
        <div className="Container">
          <img className="logo" src={logo} alt="logo" height="160" width="400"></img>
        </div>
        <div className="Container2">
          <p>
            We provide the tools for creating a customizable meal plan board for all people so that
            planning ahead, saving money on groceries, eating better food, and having a less stressful
            cooking experience can all become a reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;