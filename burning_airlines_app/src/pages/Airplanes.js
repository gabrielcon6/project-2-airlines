import React from "react";
import Planes from "../components/Planes";
import "../styles/airplanes.css";

function Airplanes() {
  return (
    <div className="airplanes-list">
      <h2>These are our aircrafts</h2>
      <Planes />
    </div>
  );
}

export default Airplanes;
