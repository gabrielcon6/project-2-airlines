import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { bold } from "ansi-colors";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav>
      <h2>Burning Airlines</h2>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/airplanes">
          <li>Airplanes</li>
        </Link>
        <Link style={navStyle} to="/flight">
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
