import React from "react";
import Planes from "./Planes2";
import Nav from "./Nav";
import HomePage from "../pages/HomePage";
import Airplanes from "../pages/Airplanes";
import FlightDetails from "../pages/FlightDetails";
import SearchFlight from "../pages/SearchFlight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/airplanes" component={Airplanes} />
          <Route path="/flights" component={FlightDetails} />
          <Route path="/search" component={SearchFlight} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
