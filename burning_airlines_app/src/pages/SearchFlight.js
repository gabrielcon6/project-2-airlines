// import React from "react";
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const SearchFlight = props => {
  const [planesList, setPlanesList, flightsList, setFlightsList] = useState([]);

  useEffect(() => {
    const serverPlaneURL = `http://localhost:3000/planes.json`;
    axios.get(serverPlaneURL).then(response => {
      const myData = response.data;
      setPlanesList(myData);
    });
    const serverFlightURL = `http://localhost:3000/flights.json`;
    axios.get(serverFlightURL).then(response => {
      const myData = response.data;
      setFlightsList(myData);
    });
  }, []);

  const myDatabase = planesList.map(planes => (
    <Fragment key={planes.id}>
      <li> {planes.name} </li>
      <li> {planes.created_at} </li>
    </Fragment>
  ));

  const myDatabase = flightsList.map(flight => (
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
      <ul>{myDatabase}</ul>
    </div>
  );
};

export default SearchFlight;
