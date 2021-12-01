import React from "react";
import "./Home.css";
import logo from './logo.png';
import meal from './meal.png';

function Homepage() {
    return (
        <div className="content">
            <div className="image">
                <img className="logo" src={logo} alt="logo"></img>
                <ul>
                    <li><a href="#"> Mealboard </a></li>
                    <li><a href="#"> About Us </a></li>
                    <li><a href="#"> Contact </a></li>
                </ul>
            </div>
            <div className="content">
                <div className="text">
                    <h2> Meal Planning Made Easy</h2>
                    <p> Are you in need of a weekly meal plan but can't seem to find one that fits you? The Culinary Army allows you browse through tons of weekly meal plan ideas to find one that suits you or you can create your own delicious meals customized to your preference. The possibilities are endless! </p>
                </div>
                <div class="image2">
                    <img className="meal" src={meal} alt="meal"></img>
                </div>
            </div>
        </div>
    );
}
export default Homepage;