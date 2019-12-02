import React from "react";
import Planes from "../components/Planes2";
import "../styles/airplanes.css";

function Airplanes() {
  return (
    <div className="airplanes-list">
      <h2>These are our planes</h2>
      <Planes />
    </div>
  );
}

export default Airplanes;
