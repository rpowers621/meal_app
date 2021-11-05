import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function textInputForms(placeholder) {
  <label>placeholder</label>
}


function App() {
  return (
    <div className="App">
      <h1>Meal Planner</h1>
      <form>
      <label for="fname">Email:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="lname">Password:</label>
      <input type="text" id="lname" name="lname"></input>
      </form>
      <button type="button">Login in</button>


    </div>
  );
}

export default App;
