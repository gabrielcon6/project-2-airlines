import React, { Component } from "react";
import axios from "axios";

class FlightId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisFlight: []
    };
  }

  componentDidMount() {
    const serverURL = `http://localhost:3000/flights/4.json`;
    axios.get(serverURL).then(res => {
      const myData = res.data;
      console.log(res.data);
      this.setState({
        thisFlight: myData
      });
    });
  }

  render() {
    // const myDatabase = this.setState.thisFlight.map(flight => (
    //   <>
    //   <ul key={flight.id}>
        
    //     <li> Flight Name: {flight.name} </li>
    //     <li> Departure: {flight.start_date} </li>
    //     <li> From: {flight.origin} </li>
    //     <li> To: {flight.destination} </li>
    //   </ul><br />
    //   </>
    // ));
    return   (
      <div>
        <p>>>>>>>Hiiiiii, it will be fixed</p>
        {/* <ul>{myDatabase}</ul> */}
        <div>{this.props.propThatImPassingToflights}</div>
      </div>
    );
  }
}

export default FlightId;
