import React, { Component } from "react";
import axios from "axios";


export default class BkgPage extends Component {
    state = {
        passenger_name: '',
    };
    
    handleChange = event => {
        this.setState({ passenger_name: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            passenger_name: this.state.passenger_name,
            flight_id: 1,
            seat_number: "2C",
            user_id: 1,
        }
        axios.post(`http://localhost:3000/reservations`, { user }).then(res => {
            console.log(res);
            console.log(res.data);
        
        })
    }
    
    render () {
        return (
            <div className="airplanes-list">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Passenger Name:<br />
                    <input type="text" passenger_name="passenger_name" onChange={this.handleChange}/><br />
                    {/* Flight ID:<br /> */}
                    {/* <input type="integer" value="1" flight_id="flight_id" onChange={this.handleChange}/><br />
                    Seat Number:<br />
                    <input type="text" value="2C" seat_number="seat_number" onChange={this.handleChange}/><br />
                    User ID:<br />
                    <input type="integer" value="1" user_id="user_id" onChange={this.handleChange}/><br /> */}
                </label>
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}

