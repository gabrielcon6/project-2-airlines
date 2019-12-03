import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "grey",
    textDecoration: "none"
  };

  return (
    <nav>
      <Link to="/">
        <h2 className="logo">Burning Airlines</h2>
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/airplanes">
          <li>Airplanes</li>
        </Link>
        <Link style={navStyle} to="/flights">
          <li>Flights</li>
        </Link>
        <Link style={navStyle} to="/search">
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
