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
console.log(myData)
this.setState({
thisFlight: myData
});
});
}

render() {
    console.log(this.state.thisFlight.plane_id);
return (<div className="airplanes-list">
    <p>fixing it</p>
    {/* <p>flight={this.state.thisFlight}></p> */}
</div>);
}
}

export default ReservationPage;
