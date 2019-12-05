import React from "react";
import ReservationSeats from "../components/ReservationSeats";
import axios from "axios";

class ReservationPage extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        flightId: [],
        thisSeats: [],
    }
}

componentDidMount() {
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
                <ReservationSeats rows={numRows} cols={numCols}/>
            </div>
    );
  }
}

//form passenger_name
//on change event in the input field
//callbackfunction updating data and state **as the user types**
//fetch axios 

export default ReservationPage;

