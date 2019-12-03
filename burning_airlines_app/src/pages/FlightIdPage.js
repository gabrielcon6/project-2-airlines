import React from "react";
import FlightId from "../components/FlightId";

function FlightIdPage() {
  return (
    <div className="airplanes-list">
      <h1>These are your flight details</h1>
      <FlightId />
    </div>
  );
}

export default FlightIdPage;
