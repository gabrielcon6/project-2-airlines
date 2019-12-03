import React from "react";
import Nav from "./Nav";
import HomePage from "../pages/HomePage";
import Airplanes from "../pages/Airplanes";
import FlightsPage from "../pages/FlightsPage";
import SearchFlight from "../pages/SearchFlight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/airplanes" component={Airplanes} />
          <Route path="/flights" component={FlightsPage} />
          <Route path="/search" component={SearchFlight} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
