import React from "react";
import ReservationSeats from "../components/ReservationSeats";
import axios, { sleeper } from "axios";

class ReservationPage extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        flightId: this.props.match.params.flightId,
        planeId: [],
        thisSeats: [],
        thisFlight: []
    }
}

componentDidMount() {
    const flightsServerURL = `http://localhost:3000/flights/${this.state.flightId}.json`;
    console.log(flightsServerURL)
    axios.get(flightsServerURL).then(res => {
        const myFlightData = res.data;
        console.log(myFlightData);
        this.setState({
            thisFlight: myFlightData
        })
    });
    const planeServerURL = `http://localhost:3000/planes/${this.state.thisFlight.plane_id}.json`;
    console.log(planeServerURL)
    axios.get(planeServerURL).then(res => {
        const mySeatData = res.data;
        this.setState({
            thisPlane: [mySeatData]
        });
    });
    
    console.log(this.state.thisSeats)
    const seatsServerURL = `http://localhost:3000/seats/1.json`;
    axios.get(seatsServerURL).then(res => {
        const mySeatData = res.data;
        this.setState({
            thisSeats: [mySeatData]
        });
    });

}

render() {

    const numRows = this.state.thisSeats.map(s =>  s.row)
    const numCols = this.state.thisSeats.map(s =>  s.column)

    return (
            <div className="airplanes-list">
                <ReservationSeats rows={numRows} cols={numCols} flight_id={this.state.flightId} flight_name={this.state.thisFlight.name}/>
            </div>
    );
  }
}

//form passenger_name
//on change event in the input field
//callbackfunction updating data and state **as the user types**
//fetch axios 

export default ReservationPage;

