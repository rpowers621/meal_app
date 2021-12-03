import { React } from 'react'


function Nutrition() {
    console.log("Success");

    return (
        <div>
            <h1>HELLO</h1>
            <img src={process.env.PUBLIC_URL + '/nutritional_breakdown.png'} alt="" />
        </div>
    );
} export default Nutrition;
