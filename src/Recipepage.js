import './App.css'
import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import {useHistory } from 'react-router-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Nutrition from './Nutritionbreakdown';


function Recipepage() {


    
    const [title, setTitle]= useState('');
    const [servingSize, setServingSize]= useState('');
    const [readyMins, setReadyMins] =useState('');
    const [recipeImg, setRecipeImg]= useState('');
    const [sourceURL, setSoureURL] =useState('');
    const [dishType, setDishType]= useState('');
    const [ingredients, setIngredients] =useState([]);
    const [ingred_imgs, setIngredImg] = useState([]);
    const [instruction, setInstruction]= useState([]);

    const [day, setDay] = useState('');
    const [id, setId] =useState("");
    const [update, setUpdate] = useState({});
    const [titles, setTitles] = useState({});
    



    const location = useLocation();
    useEffect(() => {
        console.log(location.state.detail);
        console.log(location.state.detail.recipe_title);
        setTitle(location.state.detail.recipe_title);
        setServingSize(location.state.detail.servings);
        setReadyMins(location.state.detail.ready_in_mins);
        setRecipeImg(location.state.detail.recipe_img);
        setSoureURL(location.state.detail.source_url);
        setDishType(location.state.detail.dish_type);
        setIngredients(location.state.detail.ingredients);
        setIngredImg(location.state.detail.ingred_imgs);
        setInstruction(location.state.detail.instructions);
        setId(location.state.detail.id)
    }, [location]);


    const history = useHistory();
    function route(){
        let path = '/Recipebox';
        history.push(
           { pathname: path,
             state: {detail: location.state.detail}
         });
 
     }
     const history2 = useHistory();
    function nutrition(){
        let path2 = '/nutritionbreakdown';
        history2.push(
           { pathname: path2}
        );
    } 


    function addToDB() {
        update[id]= day;
        setUpdate(update);
    
        fetch("/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "update": update, "title" : title }),
        }).then((response) => response.json()).then((data) => {
            console.log(data);
          
    });
}


const ingredsList = [];
for(const [index,value]of ingredients.entries()){
    ingredsList.push(<li key={index}>{value}</li>)
}

    return (
        <div>
            <button onClick={route}> Back To Mealboard</button> 

            <div className="row">
            
                <div className="col" id="left-side">
                    <h1>{title}</h1>

                    <h4> Serving Size: {servingSize}</h4>
                        <img src={recipeImg} />
           
                    <h4> Ready in: {readyMins} minutes</h4>

                
                 
                    
                    <a href={sourceURL} style={{color : 'black'}}> Link to Recipe's Original Website </a>

                    <div className="add-to-mb">
                            <select onChange={(e) => setDay(e.target.value)} >
                                <option value='default'> Pick Day </option>
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Thursday</option>
                                <option value="5">Friday</option>
                                <option value="6">Saturday</option>
                                <option value="7">Sunday</option>
                            </select>
                            <button onClick={addToDB}>Add recipe!</button>
                            
                    </div>
                
                  

                </div>

            </div>
            <div className="row" style={{display:'flex'}}>
                <h3> Ingredients </h3>
                <br></br>
                <br></br>
                <ul>{ingredsList}</ul>
            </div>
            <br></br>
            <br></br>      
            <div>
                {instruction.map((value, index)=>(
                    <p> Step {index+1}: {value}</p>
                ))}
            </div>
          
            <footer>
                <BrowserRouter>
                    <Route path='/Nutritionbreakdown' component={Nutrition}/>
                    <Link to='/Nutritionbreakdown'>Nutritional Breakdown</Link>
                </BrowserRouter>
            </footer>
        </div >
    );

}
export default Recipepage;