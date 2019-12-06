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
        console.log(this.state)
        const user = {
            passenger_name: this.state.passenger_name,
            flight_id: 1,
            seat_number: "2C",
            user_id: 1,
            
        }
        axios.post(`http://localhost:3000/reservations.json`, user).then(res => {
            console.log(res);
            console.log(res.data);
        
        }).catch(error => {
            console.log(error.response)
        });
    }
    
    render () {
        return (
            <div className="airplanes-list">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Passenger Name:<br />
                    <input type="text" passenger_name="passenger_name" onChange={this.handleChange}/><br />
                    Flight Number:<br />
                    <input type="integer" value="VA123" readOnly /><br />
                    Seat Number:<br />
                    <input type="text" value="2C" readOnly /><br />
                    Date:<br />
                    <input type="integer" value="20/12/2019" readOnly /><br />
                </label>
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}

