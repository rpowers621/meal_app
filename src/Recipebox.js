import { React, useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom';
import './App.css'
import UserProfile from './UserProfile';

function Recipebox() {

    const [searchType, setSearchType] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('');
    const [meals, setMeals] = useState("");
    const [meal_ids, setMeal_ids] = useState("");
    const [recipeData, setRecipeData] = useState("");
    const [day, setDay] = useState('');
    const [mon, setMon] = useState('');
    const [tues, setTues] = useState('');
    const [wed, setWed] = useState('');
    const [thur, setThur] = useState('');
    const [fri, setFri] = useState('');
    const [sat, setSat] = useState('');
    const [sun, setSun] = useState('');
  
    const [monId, setMonId] = useState('');
    const [tuesId, setTuesId] = useState('');
    const [wedId, setWedId] = useState('');
    const [thurId, setThurId] = useState('');
    const [friId, setFriId] = useState('');
    const [satId, setSatId] = useState('');
    const [sunId, setSunId] = useState('');

    console.log(UserProfile.getName());

    useEffect(() => {

        fetch("/connectDB", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            setMon(data.mon_name);
            setMonId(data.mon_ids);
            setTues(data.tues_name);
            setTuesId(data.tues_ids);
            setWed(data.wed_name);
            setWedId(data.wed_ids);
            setThur(data.thur_name);
            setThurId(data.thur_ids);
            setFri(data.fri_name);
            setFriId(data.fri_ids);
            setSat(data.sat_name);
            setSatId(data.sat_ids);
            setSun(data.sun_name);
            setSunId(data.sun_ids);


        });
    }, [])

    

    function add(e) {
        setSearchCriteria([...searchCriteria, e]);
    }

    function refresh() {
        setSearchCriteria('');
        setSearchType('');
        setMeal_ids('');
        setMeals('');

    }

    function send() {

        fetch("/getsuggestions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'searchCritria': searchCriteria, "searchType": searchType }),
        }).then((response) => response.json()).then((data) => {
            console.log(data);

            for (var [key, value] of Object.entries(data)) {
                setMeals([...meals, value]);
                setMeal_ids([...meal_ids, key]);

                console.log(meals);
            }


        });
        return;

    }

    const history = useHistory();
    function recipe_page(e) {
        console.log(e);

        fetch("/recipepage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id": e }),
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            setRecipeData(data);
        });

    }

    function route() {
        let path = '/Recipepage';
        history.push(
            {
                pathname: path,
                state: { detail: recipeData }
            });

    }

    function addToBoard(e) {
        console.log(e);
    }

    function addToDay(e) {
        console.log(e);
        //heroReactDOM.render(<p></p>)
    }

    return (

        <div className="box">
            <h1> {UserProfile.getName()}&apos;s Mealboard</h1>
            <div className="row">

                <div className="col">
                    <div className="recipe_search_box">
                        <h1>Search For Recipes</h1>

                        <div className="by_ingreds">
                            <input onChange={() => setSearchType('ingredients')} type="checkbox" name="ingreds"
                                value="Search by Ingredients" />
                            <label id="ingredients" className="label-header" htmlFor="ingreds">Search by Ingredients</label>
                            <br />
                            <div className="row">
                                <div className="input-ingreds">
                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="chicken" />
                                    <label htmlFor="">Chicken</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="pork" />
                                    <label htmlFor="">Pork</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="beef" />
                                    <label htmlFor="">Beef</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="fish" />
                                    <label htmlFor="">Fish</label>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="input-ingreds">
                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="lettuce" />
                                    <label htmlFor="">Lettuce</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Rice" />
                                    <label htmlFor="">Rice</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Apple" />
                                    <label htmlFor="">Apple</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Garlic" />
                                    <label htmlFor="">Garlic</label>

                                </div>

                            </div>
                            <br />
                            <div className="row">
                                <div className="input-ingreds">
                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Egg" />
                                    <label htmlFor="">Egg</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Corn" />
                                    <label htmlFor="">Corn</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Cheese" />
                                    <label htmlFor="">Cheese</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Mushroom" />
                                    <label htmlFor="">Mushroom</label>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="input-ingreds">
                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="butter" />
                                    <label htmlFor="">Butter</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Flour" />
                                    <label htmlFor="">Flour</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="onion" />
                                    <label htmlFor="">Onion</label>

                                    <input onChange={(e) => add(e.target.value)} id="ingreds" type="checkbox" value="Orange" />
                                    <label htmlFor="">Orange</label>
                                </div>
                            </div>
                            <br />
                            <label htmlFor="">Enter Ingredient</label>
                            <input data-testid="Enter_Ingredient" onChange={(e) => add(e.target.value)} id="ingreds" type="text" />
                            <button onClick={send}>Add Ingredients</button>


                            <br />
                        </div>

                        <div className="by_calories">
                            <input onChange={() => setSearchType('calories')} type="checkbox" name="calories"
                                value="Search by Calories" />
                            <label className="label-header" htmlFor="calories">Search by Calories</label>
                            <br />
                            <label htmlFor="">Enter Calories Amount</label>
                            <input onChange={(e) => add(e.target.value)} id="calories" type="text" />
                            <button onClick={send}>Add </button>
                        </div>

                        <div className="by_diet">
                            <input onChange={() => setSearchType('diet')} type="checkbox" name="diet"
                                value="Search by Diet" />
                            <label className="label-header" htmlFor="diet">Search by Diet</label>
                            <br />
                            <div className="drop-diet">
                                <select onChange={(e) => add(e.target.value)} id="diet" name="" placeholder=" ">
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
                                value="Search by Cuisine" />
                            <label className="label-header" htmlFor="cuisine">Search by Cuisine</label>
                            <br />
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
                        <div>
                            <input onChange={(e) => addToBoard(e.target.value)} type="checkbox" name="ingreds"
                                value="0" />
                            <button className="recipe-button" value={meal_ids[0]} onClick={(e => recipe_page(e.target.value))}> {meals[0]}</button>
                        </div>
                        <div>
                            <input onChange={(e) => addToBoard(e.target.value)} type="checkbox" name="ingreds"
                                value="1" />
                            <button className="recipe-button" value={meal_ids[1]} onClick={(e => recipe_page(e.target.value))}> {meals[1]}</button>
                        </div>
                        <div>
                            <input onChange={(e) => addToBoard(e.target.value)} type="checkbox" name="ingreds"
                                value="2" />
                            <button className="recipe-button" value={meal_ids[2]} onClick={(e => recipe_page(e.target.value))}> {meals[2]}</button>
                        </div>
                        <div>
                            <input onChange={(e) => addToBoard(e.target.value)} type="checkbox" name="ingreds"
                                value="3" />
                            <button className="recipe-button" value={meal_ids[3]} onClick={(e => recipe_page(e.target.value))}> {meals[3]}</button>
                        </div>
                        <div>
                            <input onChange={(e) => addToBoard(e.target.value)} type="checkbox" name="ingreds"
                                value="4" />
                            <button className="recipe-button" value={meal_ids[4]} onClick={(e => recipe_page(e.target.value))}> {meals[4]}</button>
                        </div>

                        <div className="add-to-mb">
                            <select onChange={(e) => setDay(e.target.value)} id="" name="" placeholder="Pick Day">
                                <option value="mon">Monday</option>
                                <option value="tues">Tuesday</option>
                                <option value="wed">Wednesday</option>
                                <option value="thur">Thursday</option>
                                <option value="fri">Friday</option>
                                <option value="sat">Saturday</option>
                                <option value="sun">Sunday</option>
                            </select>
                            <button onClick={(e) => addToDay(e.target.value)}>Add</button>
                        </div>

                        <button onClick={route}>Go to Recipe page!</button>
                    </div>
                </div>
                <div className='col'>
                    <div className="monday">
                        <h3>Monday</h3>
                        <div>
                            <p>{mon}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="tuesday">
                        <h3>Tuesday</h3>
                        <div>
                            <p>{tues}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="wednesday">
                        <h3>Wednesday</h3>
                        <div>
                            <p>{wed}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="thursday">
                        <h3>Thursday</h3>
                        <div>
                            <p>{thur}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="friday">
                        <h3>Friday</h3>
                        <div>
                            <p>{thur}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="saturday">
                        <h3>Saturday</h3>
                        <div>
                            <p>{sat}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="sunday">
                        <h3>Sunday</h3>
                        <div>
                            <p>{sun}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Recipebox;