import React from 'react';
import mealprep from './mealprep.jpeg';
import logo from './logo.png';
import "./About.css";


function About() {
  return (
    <div className="About">
      <img className="mealprep" src={mealprep} alt="mealprep" height="390px" width="1435px"></img>
      <div className="image">
        <img className="logo" src={logo} alt="logo" height="120" width="300"></img>
      </div>
      <div className="Container">
        <p>
          We provide the tools for creating a customizable meal plan board for all people so that
          planning ahead, saving money on groceries, eating better food, and having a less stressful
          cooking experience can all become a reality.
        </p>
        <br /><br /><br />
        <div className="footer">
          copyright © 2021. <br />
          Adithya Venkatesh. Rachel Powers. Melina Phan. Youngjune Kim.
        </div>
      </div>
    </div>
  );
}

export default About;