import React, { Component } from "react";
import FlightId from "../components/FlightId";
import axios from "axios";

export default class FlightIdPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
          flightId: this.props.match.params.flightId,
          thisFlight: {}
      }
  }
  
  componentDidMount() {
    const serverURL = `http://localhost:3000/flights/${this.state.flightId}.json`;
    axios.get(serverURL).then(res => {
      const myData = res.data;
      this.setState({
        thisFlight: myData
      });
    });
  }

  render() {
      return (
      <div className="airplanes-list">
        <FlightId flight={this.state.thisFlight} />
      </div>);
  }
}
