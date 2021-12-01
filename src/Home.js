import React from "react";
import "./Home.css";
import logo from './logo.png';
import meal from './meal.png';

function Home() {
    return (
        <div className="content">
            <div className="image">
                <img className="logo" src={logo} alt="logo"></img>
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
export default Home;
