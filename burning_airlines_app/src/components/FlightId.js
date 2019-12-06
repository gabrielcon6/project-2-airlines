import React, { Component } from "react";
import { Link } from "react-router-dom";

class FlightId extends Component {
  render() {
    return   (
      <div className="airplanes-list">
                <div className="search-bar">
        {/* /*WE NEED TO ADD A KEY FOR THIS UL*/ }
        <ul> 
        <li>Flight Number: {this.props.flight.name}</li>
        <li>From: {this.props.flight.origin}</li>
        <li>To: {this.props.flight.destination}</li>
        <li>Date: {this.props.flight.start_date}</li>
        <li> < Link to={`/flights/${this.props.flight.id}/reservation`}> Book a Seat </Link> </li> 
        </ul>
        </div>
      </div>
    );
  }
}
export default FlightId;