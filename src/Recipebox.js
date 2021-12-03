import { React, useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom';
import './App.css'
import UserProfile from './UserProfile';

function Recipebox() {

    const [searchType, setSearchType] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('');
    const [meals, setMeals] = useState([""]);
    const [meal_ids, setMeal_ids] = useState([""]);
    const [recipeData, setRecipeData] = useState("");
    const [day, setDay] = useState('');
    const [mon, setMon] = useState(['']);
    const [tues, setTues] = useState(['']);
    const [wed, setWed] = useState(['']);
    const [thur, setThur] = useState(['']);
    const [fri, setFri] = useState(['']);
    const [sat, setSat] = useState(['']);
    const [sun, setSun] = useState(['']);

    const [monId, setMonId] = useState('');
    const [tuesId, setTuesId] = useState('');
    const [wedId, setWedId] = useState('');
    const [thurId, setThurId] = useState('');
    const [friId, setFriId] = useState('');
    const [satId, setSatId] = useState('');
    const [sunId, setSunId] = useState('');

    const [update, setUpdate] = useState({});
    const [titles, setTitles] = useState({});

    const [iSelect, setI] = useState(false);
    const [cSelect, setC] = useState(false);
    const [dSelect, setD] = useState(false);
    const [cuSelect, setCU] = useState(false);

    const [active, setActive] = useState();

    const [cal, setCal] = useState("");
    const [ingred, setIngred] = useState("");

    const [toDelete, setDelete] = useState('');

    const [error, setError] = useState('');



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
        console.log(e);
        if (e !== "") {
            setSearchCriteria([e]);
        }

        setI(false);
        setC(false);
        setD(false);
        setCU(false);
        setCal("");
        setIngred("");
        setError('');
        setActive('');
    }

    function refresh() {
        setSearchCriteria('');
        setSearchType('');
        setMeal_ids(['']);
        setMeals(['']);

        setI(false);
        setC(false);
        setD(false);
        setCU(false);
        setError('');

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
            if (data.error) {
                console.log("error");
                setError(data.error);
            } else {
                setMeals([...meals, data.key]);
                setMeal_ids([...meal_ids, data.value]);

                setI(false);
                setC(false);
                setD(false);
                setCU(false);
                setError('');
                setActive('');
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
        console.log(day);
        setUpdate({});
        update[meal_ids[e]] = day;


        setUpdate(update);
        console.log(meal_ids[e]);
        setTitles(meals[e]);
        setError('');
    }

    function addToDB() {
        console.log(update);
        console.log(titles);

        fetch("/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "update": update, "title": titles }),
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            setDay("");
            setUpdate({});
            setTitles("");
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
            setError('');
            setActive('');
            setMeal_ids(['']);
            setMeals(['']);

        });
    }

    function resetMealboard() {
        fetch("/reset", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
            setError('');

            refresh();


        });
    }

    function deleteMeal() {
        fetch("/delete", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "delete": toDelete }),
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

    }


    var sug_box = []
    for (var [index, value] of meals.entries()) {
        if (value) {
            sug_box.push(<div>
                <button style={active === index + "b" ? { backgroundColor: 'red' } : {}} className="recipe-button" value={value} onClick={(e) => { recipe_page(meal_ids[index]); setActive(index + "b"); addToBoard(index) }}> {value}</button>

            </div>)
        } else {
            continue;
        }

    }
    const greeting = [];
    if (UserProfile.getName()) {
        greeting.push(<h1> {UserProfile.getName()}&apos;s Mealboard</h1>)
    }




    const mon_items = [];
    for (const [index, value] of mon.entries()) {
        mon_items.push(<button className="sug-but" style={active === index + "m" ? { backgroundColor: 'red' } : {}} value={monId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "m"); setDelete(e.target.value); }}>{value}</button>)
    }

    const tues_items = [];
    for (const [index, value] of tues.entries()) {
        tues_items.push(<button className="sug-but" style={active === index + "t" ? { backgroundColor: 'red' } : {}} value={tuesId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "t"); setDelete(e.target.value); }}>{value}</button>)
    }

    const wed_items = [];
    for (const [index, value] of wed.entries()) {
        wed_items.push(<button className="sug-but" style={active === index + "w" ? { backgroundColor: 'red' } : {}} value={wedId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "w"); setDelete(e.target.value); }}>{value}</button>)
    }

    const thur_items = [];
    for (const [index, value] of thur.entries()) {
        thur_items.push(<button className="sug-but" style={active === index + "th" ? { backgroundColor: 'red' } : {}} value={thurId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "th"); setDelete(e.target.value); }}>{value}</button>)
    }

    const fri_items = [];
    for (const [index, value] of fri.entries()) {
        fri_items.push(<button className="sug-but" style={active === index + "f" ? { backgroundColor: 'red' } : {}} value={friId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "f"); setDelete(e.target.value); }}>{value}</button>)
    }

    const sat_items = [];
    for (const [index, value] of sat.entries()) {
        sat_items.push(<button className="sug-but" style={active === index + "s" ? { backgroundColor: 'red' } : {}} value={satId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "s"); setDelete(e.target.value); }}>{value}</button>)
    }

    const sun_items = [];
    for (const [index, value] of sun.entries()) {
        sun_items.push(<button className="sug-but" style={active === index + "sn" ? { backgroundColor: 'red' } : {}} value={sunId[index]} onClick={(e) => { recipe_page(e.target.value); setActive(index + "sn"); setDelete(e.target.value); }}>{value}</button>)
    }
    return (

        <div className="box">
            {greeting}
            <div className="row">

                <div className="col">
                    <div className="recipe_search_box">
                        <h1>Search For Recipes</h1>
                        <br />
                        <div className="by_ingreds">
                            <input onClick={() => { setSearchType('ingredients'); setI(true); }} checked={iSelect} type="checkbox" name="ingreds"
                                value="Search by Ingredients" />
                            <label id="ingredients" className="label-header" htmlFor="ingreds">Search by Ingredients</label>
                            <br></br>
                            <label htmlFor="">Enter Ingredient</label>
                            <input data-testid="Enter_Ingredient" value={ingred} on onChangeCapture={(e) => { add(e.target.value); setIngred(e.target.value); }} id="ingreds" type="text" />
                            <p> {error} </p>
                            <button onClick={send}>Add Ingredients</button>


                            <br />
                        </div>


                        <div className="by_diet">
                            <input onClick={() => { setSearchType('diet'); setD(true); }} checked={dSelect} type="checkbox" name="diet"
                                value="Search by Diet" />
                            <label className="label-header" htmlFor="diet">Search by Diet</label>
                            <br />
                            <div className="drop-diet">
                                <select onChange={(e) => add(e.target.value)} id="diet" name="" placeholder=" ">
                                    <option value='default'> Pick Diet </option>
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
                            <input onClick={() => { setSearchType('cuisine'); setCU(true); }} checked={cuSelect} type="checkbox" name="cuisine"
                                value="Search by Cuisine" />
                            <label className="label-header" htmlFor="cuisine">Search by Cuisine</label>
                            <br /><br />
                            <div className="drop-cuisine">
                                <select onChange={(e) => add(e.target.value)} id="cuisine" name="">
                                    <option value='default'>Pick Cuisine</option>
                                    <option value="African">African</option>
                                    <option value="American">American</option>
                                    <option value="British">British</option>
                                    <option value="Cajun">Cajun</option>
                                    <option value="Caribbean">Caribbean</option>
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
                                    <option value="Thai">Thai</option>
                                    <option value="Vietnamese">Vietnamese</option>
                                </select>
                            </div>
                            <br />
                            <button onClick={send}>Add Cuisine</button>
                            <br /><br />
                            <button onClick={refresh}> Clear Suggestions</button>

                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="suggestion-box">
                        <h3>Suggestion Box</h3><br />
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

                        </div>
                        {sug_box}

                        <br />

                        <button onClick={addToDB}>Add Day</button>

                    </div>
                </div>
                <div className='col'>
                    <div className="monday">
                        <h3>Monday</h3>
                        <div className="row">
                            <div className="row-top">
                                {mon_items}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col'>
                    <div className="tuesday">
                        <h3>Tuesday</h3>
                        <div className="row">
                            <div className="row-top">
                                {tues_items}
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col'>
                    <div className="wednesday">
                        <h3>Wednesday</h3>
                        <div className="row">
                            <div className="row-top">
                                {wed_items}
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col'>
                    <div className="thursday">
                        <h3>Thursday</h3>
                        <div className="row">
                            <div className="row-top">
                                {thur_items}
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col'>
                    <div className="friday">
                        <h3>Friday</h3>
                        <div className="row">
                            <div className="row-top">
                                {fri_items}
                            </div>
                        </div>


                    </div>
                </div>
                <div className='col'>
                    <div className="saturday">
                        <h3>Saturday</h3>
                        <div className="row">
                            <div className="row-top">
                                {sat_items}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col'>
                    <div className="sunday">
                        <h3>Sunday</h3>
                        <div className="row">
                            <div className="row-top">
                                {sun_items}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <button onClick={resetMealboard}> Reset Mealboard </button>
                <div class="divider"></div>
                <button onClick={route}> Go to Recipe Page </button>
                <div class="divider"></div>
                <button onClick={deleteMeal}> Delete Recipe</button>
            </div>
        </div>
    );

}
export default Recipebox;