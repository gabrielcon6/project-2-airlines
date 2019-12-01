import React from "react";
import "../styles/index.css";

function Nav() {
  return (
    <nav>
      <h2>Burning Airlines</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Airplanes</li>
        <li>Flight Details</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}

export default Nav;
