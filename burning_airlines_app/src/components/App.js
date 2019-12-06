import React from "react";
import Nav from "./Nav";
import HomePage from "../pages/HomePage";
import Airplanes from "../pages/Airplanes";
import FlightsPage from "../pages/FlightsPage";
import FlightIdPage from "../pages/FlightIdPage";
import ReservationPage from "../pages/ReservationPage";
import SearchFlight from "../pages/SearchFlight";
import PlaneLayout from "../pages/PlaneLayout";
import MakeBooking from "../pages/MakeBooking";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BkgPage from "../pages/BkgPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/airplanes" component={Airplanes} />
          <Route path="/flights" exact component={FlightsPage} />
          <Route path="/flights/:flightId" exact component={FlightIdPage} />
          <Route path="/flights/:flightId/reservation" exact component={ReservationPage} />
          <Route path="/search" component={SearchFlight} />
          <Route path="/booking" component={BkgPage} />
          <Route path="/planeLayout" component={PlaneLayout} />
          <Route path="/makeBooking" component={MakeBooking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
