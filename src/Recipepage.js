import './App.css'
import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router';


function Recipepage() {

    const placeholder = {"step1" : ""};

    
    const [title, setTitle]= useState('');
    const [servingSize, setServingSize]= useState('');
    const [readyMins, setReadyMins] =useState('');
    const [recipeImg, setRecipeImg]= useState('');
    const [sourceURL, setSoureURL] =useState('');
    const [dishType, setDishType]= useState('');
    const [ingredients, setIngredients] =useState('');
    const [instruction, setInstruction]= useState(placeholder);



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
        setInstruction(location.state.detail.instruction);
    }, [location]);

  

    return (
        <div>
            
            <div className="row" style={{backgroundImage: "url(" + {recipeImg} + ")",backgroundPosition: 'center',backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div className="col" id="left-side">
                    <h1>{title}</h1>

                    <h4> Serving Size: {servingSize}</h4>

                    <h4> Ready in: {readyMins} minutes</h4>

                
                 
                    
                    <a href={sourceURL} style={{color : 'black'}}> Link to Recipe's Original Website </a>
                  

                </div>

            </div>
           
          
            <footer>
                <p></p>
            </footer>
        </div >
    );

}
export default Recipepage;