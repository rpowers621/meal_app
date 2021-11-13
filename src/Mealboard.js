
import {React ,useState} from 'react'
import './App.css' 
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

function Mealboard() {


    
    const [searchType, setSearchType] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('');
    const [suggestions, setSuggestions] = useState(''); 


    function add(e){
        setSearchCriteria([...searchCriteria, e]);
    }

    function refresh(){
        setSearchCriteria('');
        setSearchType('');
    }

    function send(){
        
        console.log(searchType);
        console.log(searchCriteria);

        fetch('/getsuggestions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'search': searchType }),
          }).then((response) => response.json()).then((data) => {
            // eslint-disable-next-line no-console
            console.log(data);
            setSuggestions(data.suggestions);
           
            console.log(suggestions);
          });
    }
    return(
        <> 
            <div className="box">
                <div className="row">
                    <div className="col">
                        <div className="recipe_search_box">
                            <h1>Search For Recipes</h1>

                                <div className="by_ingreds">
                                    <input onChange={() => setSearchType('ingredients') }type="checkbox" name="ingreds"
                                        value="Search by Ingredients"/>
                                    <label className="label-header" for="ingreds">Search by Ingredients</label>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="chicken"/>
                                            <label for="">Chicken</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="pork"/>
                                            <label for="">Pork</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="beef"/>
                                            <label for="">Beef</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="fish"/>
                                            <label for="">Fish</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="lettuce"/>
                                            <label for="">Lettuce</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Rice"/>
                                            <label for="">Rice</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Apple"/>
                                            <label for="">Apple</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Garlic"/>
                                            <label for="">Garlic</label>

                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Egg"/>
                                            <label for="">Egg</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Corn"/>
                                            <label for="">Corn</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Cheese"/>
                                            <label for="">Cheese</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Mushroom"/>
                                            <label for="">Mushroom</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="input-ingreds">
                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="butter"/>
                                            <label for="">Butter</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Flour"/>
                                            <label for="">Flour</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="onion"/>
                                            <label for="">Onion</label>

                                            <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Orange"/>
                                            <label for="">Orange</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <label for="">Enter Ingredient</label>
                                    <input  onChange={(e) => add(e.target.value)} id="ingreds" type="text"/>
                                    <button onClick={send}>Add</button>

                                    <br/>
                                </div>

                                <div className="by_calories">
                                    <input onChange={() => setSearchType('calories')} type="checkbox" name="calories"
                                        value="Search by Calories"/>
                                    <label className="label-header" for="calories">Search by Calories</label>
                                    <br/>
                                    <label for="">Enter Calories Amount</label>
                                    <input onChange={(e) => add(e.target.value)} id="calories" type="text"/>
                                    <button onClick={send}>Add</button>
                                </div>

                                <div className="by_diet">
                                    <input onChange={() => setSearchType('diet')} type="checkbox" name="diet"
                                        value="Search by Diet"/>
                                    <label className="label-header" for="diet">Search by Diet</label>
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
                                    <button onClick={send}>Add</button>
                                </div>

                                <div className="by_cuisine">
                                    <input onChange={() => setSearchType('cuisine')} type="checkbox" name="cuisine"
                                        value="Search by Cuisine"/>
                                    <label className="label-header" for="cuisine">Search by Cuisine</label>
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
                                    <button onClick={send}>Add</button>
                                    <button onClick={refresh}> refresh</button>
                        </div>
                                </div>
                                
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mealboard;