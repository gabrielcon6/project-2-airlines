import React, { Component } from "react";
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
    const myDatabase = this.state.flightsList.map((flight, index) => (
      <>
      <ul>
        <li key={`fli-${index}`}> < Link to={`/flights/${flight.id}`}> Flight Name: {flight.name} </Link> </li> 
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
