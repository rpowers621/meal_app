import {React ,useState,} from 'react'
import {useHistory } from 'react-router-dom';
import './App.css' 

function Recipebox() {
    
    const [searchType, setSearchType] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('');
    const [suggestions, setSuggestions] = useState(["test"]); 
    const [meals, setMeals] = useState("");
    const [meal_ids, setMeal_ids] = useState("");
    const [recipeData, setRecipeData]= useState("");

 


  

    function add(e){
        setSearchCriteria([...searchCriteria, e]);
    }

    function refresh(){
        setSearchCriteria('');
        setSearchType('');
        setMeal_ids('');
        setMeals('');
        
    }

    


    function send(){
        
        fetch("/getsuggestions", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {'searchCritria': searchCriteria,"searchType": searchType }),
          }).then((response) => response.json()).then((data) => {
            console.log(data);


            setSuggestions(data);

            for(var [key , value] of Object.entries(data)){
                setMeals([...meals, value]);
                setMeal_ids([...meal_ids, key]);
                setTimeout(()=> { console.log(meals)}, 1000);
                console.log(meals);
            }
         

        });
    return; 
       
    } 

   
    function recipe_page(){
      
        fetch("/recipepage", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {"id": meal_ids[0] }),
          }).then((response) => response.json()).then((data) => {
            console.log(data);
            setRecipeData(data);
          });

    }

    function route(){
       let path = '/Recipepage';
       history.push(
          { pathname: path,
            state: {detail: recipeData}
        });

    }
 
    return(
       
            <div className="box">
                <div className="row">
                
                    <div className="col">
                        <div className="recipe_search_box">
                            <h1>Search For Recipes</h1>
            
                                <div className="by_ingreds">
                                    <input onChange={() => setSearchType('ingredients') }type="checkbox" name="ingreds"
                                        value="Search by Ingredients"/>
                                    <label id ="ingredients" className="label-header" htmlFor="ingreds">Search by Ingredients</label>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="chicken"/>
                                            <label htmlFor="">Chicken</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="pork"/>
                                            <label htmlFor="">Pork</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="beef"/>
                                            <label htmlFor="">Beef</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="fish"/>
                                            <label htmlFor="">Fish</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="lettuce"/>
                                            <label htmlFor="">Lettuce</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Rice"/>
                                            <label htmlFor="">Rice</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Apple"/>
                                            <label htmlFor="">Apple</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Garlic"/>
                                            <label htmlFor="">Garlic</label>

                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Egg"/>
                                            <label htmlFor="">Egg</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Corn"/>
                                            <label htmlFor="">Corn</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Cheese"/>
                                            <label htmlFor="">Cheese</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Mushroom"/>
                                            <label htmlFor="">Mushroom</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="butter"/>
                                            <label htmlFor="">Butter</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Flour"/>
                                            <label htmlFor="">Flour</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="onion"/>
                                            <label htmlFor="">Onion</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Orange"/>
                                            <label htmlFor="">Orange</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <label   htmlFor="">Enter Ingredient</label>
                                    <input  data-testid="Enter_Ingredient" onChange={(e) => add(e.target.value)} id="ingreds" type="text"/>
                                    <button onClick={send}>Add Ingredients</button>
                         

                                    <br/>
                                </div>

                                <div className="by_calories">
                                    <input onChange={() => setSearchType('calories')} type="checkbox" name="calories"
                                        value="Search by Calories"/>
                                    <label className="label-header" htmlFor="calories">Search by Calories</label>
                                    <br/>
                                    <label htmlFor="">Enter Calories Amount</label>
                                    <input onChange={(e) => add(e.target.value)} id="calories" type="text"/>
                                    <button onClick={send}>Add </button>
                                </div>

                                <div className="by_diet">
                                    <input onChange={() => setSearchType('diet')} type="checkbox" name="diet"
                                        value="Search by Diet"/>
                                    <label className="label-header" htmlFor="diet">Search by Diet</label>
                                    <br/>
                                    <div className="drop-diet">
                                        <select onChange={(e) => add(e.target.value)}  id="diet" name="" placeholder=" ">
                                            <option value="Gluten Free">Gluten Free</option>
                                            <option value="Ketogenic">Ketogenic</option>
                                            <option value="Vegetarian">Vegetarian</option>
                                            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                                            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                                            <option value="Vegan">Vegan</option>
                                            <option value="Pescetarian">Pescetarian</option>
                                            <option value="Paleo">Paleo</option>
                                            <option value="Primal">Primal</option>
                                            <option value="Low FODMAP">Low FODMAP</option>
                                            <option value="Whole30">Whole30</option>
                                        </select>
                                    </div>
                                    <button onClick={send}>Add Diet</button>
                                </div>

                                <div className="by_cuisine">
                                    <input onChange={() => setSearchType('cuisine')} type="checkbox" name="cuisine"
                                        value="Search by Cuisine"/>
                                    <label className="label-header" htmlFor="cuisine">Search by Cuisine</label>
                                    <br/>
                                    <div className="drop-cuisine">
                                        <select onChange={(e) => add(e.target.value)} id="cuisine" name="">
                                            <option value="African">African</option>
                                            <option value="American">American</option>
                                            <option value="British">British</option>
                                            <option value="Cajun">Cajun</option>
                                            <option value="Caribbean">Caribbean</option>
                                            <option value="Chinese">Chinese</option>
                                            <option value="Eastern European">Eastern European</option>
                                            <option value="European">European</option>
                                            <option value="French">French</option>
                                            <option value="German">German</option>
                                            <option value="Greek">Greek</option>
                                            <option value="Indian">Indian</option>
                                            <option value="Irish">Irish</option>
                                            <option value="Italian">Italian</option>
                                            <option value="Japanese">Japanese</option>
                                            <option value="Jewish">Jewish</option>
                                            <option value="Korean">Korean</option>
                                            <option value="Latin American">Latin American</option>
                                            <option value="Mediterranean">Mediterranean</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="Middle Eastern">Middle Eastern</option>
                                            <option value="Nordic">Nordic</option>
                                            <option value="Southern">Southern</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Thai"></option>
                                            <option value="Vietnamese">Vietnamese</option>
                                        </select>
                                    </div>
                                    <button onClick={send}>Add Cuisine</button>
                        
                                    <button onClick={refresh}> refresh</button>
                                    
                                    <p>Please first select how you'd like to search, then press add to see a suggestion!</p>
                                    <p> To get another recipe deselect and start again!</p>
                                </div>
                        </div>  
                    </div>
                    <div className='col'>
                        <div className="suggestion-box">
                            <h3>Suggestion Box</h3>
                            <p> To view a Recipe please slect recipe and click Go to Recipe Page! </p>
                       <button className="recipe-button"onClick={recipe_page}> {meals[0]}</button> 
                       <button className="recipe-button"onClick={recipe_page}> {meals[1]}</button> 
                       <button className="recipe-button"onClick={recipe_page}> {meals[2]}</button> 
                       <button className="recipe-button"onClick={recipe_page}> {meals[3]}</button> 
                       <button className="recipe-button"onClick={recipe_page}> {meals[4]}</button> 
                    <button  onClick={route}>Go to Recipe page!</button>         
                        </div>
                    </div>
                    <div className='col'>
                        <div className="monday">
                            <h3>Monday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="tuesday">
                            <h3>Tuesday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="wednesday">
                            <h3>Wednesday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="thursday">
                            <h3>Thursday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="friday">
                            <h3>Friday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="saturday">
                            <h3>Saturday</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="sunday">
                            <h3>Sunday</h3>
                        </div>
                     </div>      
                </div>
            </div>
    );  
    
}
export default Recipebox;