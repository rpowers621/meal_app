
import {React ,useState} from 'react'
import './App.css' 
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

function Mealboard() {

    
    
    const [searchType, setSearchType] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('');
    const [suggestions, setSuggestions] = useState(''); 


    const mealSugesstions = [
        { id: uuid(), content: "First meal" },
        { id: uuid(), content: "Second meal" },
        { id: uuid(), content: "Third meal" },
        { id: uuid(), content: "Fourth meal" },
        { id: uuid(), content: "Fifth meal" }
      ];


      const mealColumns = {
        [uuid()]: {
          name: "Suggested",
          items: mealSugesstions
        },
        [uuid()]: {
          name: "Monday",
          items: []
        },
        [uuid()]: {
          name: "Tuesday",
          items: []
        },
        [uuid()]: {
          name: "Wednesday",
          items: []
        },
        [uuid()]: {
          name: "Thursday",
          items: []
        },
        [uuid()]: {
          name: "Friday",
          items: []
        },
        [uuid()]: {
          name: "Saturday",
          items: []
        },
        [uuid()]: {
          name: "Sunday",
          items: []
        }
      };

      const [columns, setColumns] = useState(mealColumns);

      const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
          const column = columns[source.droppableId];
          const copiedItems = [...column.items];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          });
        }
      };  

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
       
            <div className="box">
                <div className="row">
                
                    <div className="col">
                        <div className="recipe_search_box">
                            <h1>Search For Recipes</h1>

                                <div className="by_ingreds">
                                    <input onChange={() => setSearchType('ingredients') }type="checkbox" name="ingreds"
                                        value="Search by Ingredients"/>
                                    <label className="label-header" htmlFor="ingreds">Search by Ingredients</label>
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
                                    <label htmlFor="">Enter Ingredient</label>
                                    <input  onChange={(e) => add(e.target.value)} id="ingreds" type="text"/>
                                    <button onClick={send}>Add</button>

                                    <br/>
                                </div>

                                <div className="by_calories">
                                    <input onChange={() => setSearchType('calories')} type="checkbox" name="calories"
                                        value="Search by Calories"/>
                                    <label className="label-header" htmlFor="calories">Search by Calories</label>
                                    <br/>
                                    <label htmlFor="">Enter Calories Amount</label>
                                    <input onChange={(e) => add(e.target.value)} id="calories" type="text"/>
                                    <button onClick={send}>Add</button>
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
                                    <button onClick={send}>Add</button>
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
                                    <button onClick={send}>Add</button>
                                    <button onClick={refresh}> refresh</button>
                                </div>
                        </div>  
                    </div>
                    <div className="col">
                        <div style={{ display: "flex", flexDirection: "row", width: 60, height: 100}}>
                            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                                {Object.entries(columns).map(([columnId, column], index) => {
                                    return (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center"
                                            }}
                                            key={columnId}>
                                            <h2>{column.name}</h2>
                                            <div style={{ margin: 0 }}>
                                                <Droppable droppableId={columnId} key={columnId}>
                                                    {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            style={{
                                                                background: snapshot.isDraggingOver
                                                                    ? "lightblue"
                                                                    : "lightgrey",
                                                                padding: 0,
                                                                width: 150,
                                                                minHeight: 500
                                                            }}>
                                                        {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                            >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                    userSelect: "none",
                                                                    padding: 16,
                                                                    margin: "0 0 8px 0",
                                                                    minHeight: "50px",
                                                                    backgroundColor: snapshot.isDragging
                                                                        ? "#263B4A"
                                                                        : "#456C86",
                                                                    color: "white",
                                                                    ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                                );
                                                            }}
                                                            </Draggable>
                                                        );
                                                        })}
                                                        {provided.placeholder}
                                                    </div>
                                                    );
                                                }}
                                                </Droppable>
                                            </div>
                                        </div>
                                        );
                                    })}
                            </DragDropContext>
                        </div>
                    </div>                      
                </div>
            </div>
    );

    
}

export default Mealboard;