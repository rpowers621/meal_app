import React from 'react';
import coffee from '../img/coffee.jpeg';

function About() {
    return (
      <div className="About">
        <div className="Container">
          <h2>We are the Culinary ARMY!</h2>
        <div className="Container2">
          <p>
            We provide the tools for creating a customizable meal plan board for all people so that
            planning ahead, saving money on groceries, eating better food, and having a less stressful 
            cooking experience can all become a reality. 
          </p>
        </div>
        </div>
        <div className="Photo">
          <img className="coffee" src={coffee} alt="coffee"></img>
        </div>
      </div>
    );
  }

  export default About;