import React from "react";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Recipebox from "./Recipebox";
import Recipepage from "./Recipepage";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <LoginPage /> */}
      <div className="App">
        <Switch>
          <Route path="/Recipebox">
            <Recipebox />
          </Route>
          <Route path="/Recipepage">
            <Recipepage />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
