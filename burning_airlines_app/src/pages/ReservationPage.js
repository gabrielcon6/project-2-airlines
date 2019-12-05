import React from "react";
// import Reservation from "../components/Reservation";
import axios from "axios";

class ReservationPage extends React.Component {

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
myPlane: myData.plane_id
});
});
}

render() {
    console.log(this.state.myPlane);
return (<div className="airplanes-list">
    <p>fixing it</p>
    {/* <p>flight={this.state.thisFlight}></p> */}
</div>);
}
}

//form passenger_name
//on change event in the input field
//callbackfunction updating data and state **as the user types**
//fetch axios 

export default ReservationPage;
