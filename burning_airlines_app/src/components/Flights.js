import React, { Component, Fragment } from "react";
import axios from "axios";

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
      <Fragment key={flight.id}>
        <li> key={flight.name} </li>
        <li> {flight.date} </li>
        <li> {flight.destination} </li>
        <li> {flight.origin} </li>
      </Fragment>
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
