import React from "react";
import Planes from "./Planes2";
import Nav from "./Nav";
import HomePage from "../pages/HomePage";
import Flights from "../pages/Flights";
import FlightDetails from "../pages/FlightDetails";
import SearchFlight from "../pages/SearchFlight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/flights" component={Flights} />
        </Switch>
        <p>THIS IS A TITLE FROM APP COMPONENT</p>
      </div>
    </Router>
  );
}

export default App;
