import React from "react";
import Planes from "../components/Planes";

function Airplanes() {
  return (
    <div className="airplanes-list">
      <div className="search-bar">
        <h1>These are our aircrafts</h1>
        <Planes />
      </div>
    </div>
  );
}

export default Airplanes;
