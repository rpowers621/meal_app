import React from "react";
import "./Home.css";
import logo from './logo.png';
import meals from './meals.jpeg';

function Home() {
    return (
        <div className="Container1">
            <div className="Image">
                <img className="logo" src={logo} alt="logo"
                    height="160px" width="400" align="left"></img>
            </div>
            <div className="Container">
                <h2> Meal Planning Made Easy </h2>
                <p> Are you in need of a weekly meal plan but can't seem to find one that fits you? The Culinary Army allows you browse through tons of weekly meal plan ideas to find one that suits you or you can create your own delicious meals customized to your preference. The possibilities are endless! </p>
                <br />
                <div className="Image2">
                    <img className="meals" src={meals} alt="meals"></img>
                </div>
            </div>
        </div>
    );
}
export default Home;
