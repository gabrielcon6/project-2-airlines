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
    console.log(this.props.match.params.flightId);
const serverURL = `http://localhost:3000/flights/${this.state.flightId}/reservation.json`;
axios.get(serverURL).then(res => {
const myData = res.data;
this.setState({
thisFlight: myData
});
});
}

render() {
return (<div className="airplanes-list">
    <p>flight={this.state.thisFlight}></p>
</div>);
}
}

export default ReservationPage;
