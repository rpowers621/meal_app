import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Meal Planner</h1>

      <div class="login-form">
        <form>
          <label for="fname">Email:</label>
          <input type="text" id="fname" name="fname" placeholder="Email"></input>
          <label for="lname">Password:</label>
          <input type="text" id="lname" name="lname" placeholder="Password"></input>
        </form>
      </div>


      <button type="button">Login in</button>


    </div>
  );
}

export default App;
