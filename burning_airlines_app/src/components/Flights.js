import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/search.css";
import Planes from "../components/Planes";

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsList: []
    };
  }

  componentDidMount() {
    const serverURL = `http://localhost:3000/flights.json`;
    axios.get(serverURL).then(res => {
      const myData = res.data;
      this.setState({
        flightsList: myData
      });
    });
  }

  render() {
    const myListOfFlights = this.state.flightsList.map((flight, index) => (
      <>
        <button className="flights-button" key={`fli-${index}`}>
          {" "}
          <Link to={`/flights/${flight.id}`}>
            {" "}
            Flight Name: {flight.name}{" "}
          </Link>{" "}
        </button>
        <br />
      </>
    ));

    return (
      <div className="search-bar">
        <div className="airplanes-list">
          <h1>Please Choose From One Of Our Available</h1>
          <div>{myListOfFlights}</div>
        </div>
        <div className="airplanes-list">
          <h1>These are our aircrafts</h1>
          <Planes />
        </div>
      </div>
    );
  }
}

export default Flights;
