import React from "react";
import "../styles/index.css";

function Nav() {
  return (
    <nav>
      <h3>Burning Airlines</h3>
      <ul className="nav-links">
        <li>Home</li>
        <li>Flight</li>
        <li>Flight Details</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}

export default Nav;
