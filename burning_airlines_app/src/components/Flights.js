import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
    const myDatabase = this.state.flightsList.map(flight => (
      <>
      <ul key={flight.id}>
        
        <li> Flight Name: {flight.name} </li>
        <li> Departure: {flight.start_date} </li>
        <li> From: {flight.origin} </li>
        <li> To: {flight.destination} </li>
        < Link to="/flightId"> More Details </Link> 
      </ul><br />
      </>
    ));
    return (
      <div>
        <ul>{myDatabase}</ul>
        <div>{this.props.propThatImPassingToflights}</div>
      </div>
    );
  }
}

export default Flights;
