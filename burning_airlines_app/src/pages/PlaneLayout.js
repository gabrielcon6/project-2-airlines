import React from "react";
import "../styles/flightID.css";
import { Link } from "react-router-dom";

function PlaneLayout() {
  return (
    <div className="plane-layout">
      <div className="airplanes-list">
        <h2>Please Select A Seat</h2>
        <button>Search</button>
      </div>
    </div>
  );
}

export default PlaneLayout;
