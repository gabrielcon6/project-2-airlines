import React from "react";
import Flights from "../components/Flights";
// import "../styles/flights.css";

function FlightsPage() {
  return (
    <div className="airplanes-list">
      <h1>These are your flight details</h1>
      <Flights />
    </div>
  );
}

export default FlightsPage;
