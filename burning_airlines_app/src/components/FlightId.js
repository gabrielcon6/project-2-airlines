import React, { Component } from "react";

class FlightId extends Component {
  render() {
    return   (
      <div>
        <ul>
        <li>Flight Number: {this.props.flight.name}</li>
        <li>From: {this.props.flight.origin}</li>
        <li>To: {this.props.flight.destination}</li>
        <li>Date: {this.props.flight.start_date}</li>
        </ul>
      </div>
    );
  }
}
export default FlightId;