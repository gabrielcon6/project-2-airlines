// import React from "react";
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "../styles/search.css";

const SearchFlight = props => {
  const [planesList, setPlanesList] = useState([]);
  const [flightsList, setFlightsList] = useState([]);

  useEffect(() => {
    const serverPlaneURL = `http://localhost:3000/planes.json`;
    axios.get(serverPlaneURL).then(response => {
      const myData = response.data;
      setPlanesList(myData);
    });
    const serverFlightURL = `http://localhost:3000/flights.json`;
    axios.get(serverFlightURL).then(response => {
      const myData = response.data;
      console.log("myData :", myData);
      setFlightsList(myData);
    });
  }, []);

  const myDatabase = planesList.map(planes => (
    <Fragment key={planes.id}>
      <li> {planes.name} </li>
      <li> {planes.created_at} </li>
    </Fragment>
  ));

  const myFlights = flightsList.map(flight => (
    <Fragment key={flight.id}>
      <li> {flight.name} </li>
      <li> {flight.origin} </li>
      <li> {flight.destination} </li>
      <li> {flight.created_at} </li>
    </Fragment>
  ));

  return (
    <div className="search">
      <h2>this is the Search Component</h2> 
      <h3> THIS IS NOT SHOWING </h3>
      <ul>
      <li>{myDatabase}</li><br />
      <li>{myFlights}</li> <br />
      <input type='search' placeholder='search flights'/>
      </ul>
    </div>
  );
};

export default SearchFlight;
