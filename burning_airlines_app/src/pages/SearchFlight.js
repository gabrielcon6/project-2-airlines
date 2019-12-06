import React, { Component } from "react";
import axios from "axios";
import "../styles/search.css";
// import SearchBox from "../components/SearchBox";

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: "",
      setPlanesList: [],
      setFlightsList: []
    };
  }

  onSeachChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    const serverPlaneURL = `http://localhost:3000/planes.json`;
    axios.get(serverPlaneURL).then(res => {
      const myData = res.data;
      this.setState({
        setPlanesList: myData
      });
    });

    const serverFlightURL = `http://localhost:3000/flights.json`;
    axios.get(serverFlightURL).then(res => {
      const myData = res.data;
      this.setState({
        setFlightsList: myData
      });
    });
  }

  render() {
    // const myPlanes = this.state.setPlanesList.map(plane => (
    //   <Fragment key={plane.id}>
    //     <li> {plane.name} </li>
    //   </Fragment>
    // ));

    // const myFlights = this.state.setFlightsList.map(flight => (
    //   <Fragment key={flight.id}>
    //     <li> {flight.name} </li>
    //     <li> {flight.start_date} </li>
    //     <li> {flight.origin} </li>
    //     <li> {flight.destination} </li>
    //   </Fragment>
    // ));

    const filteredFlights = this.state.setFlightsList.filter(flight => {
      return flight.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    console.log(filteredFlights);

    return (
      <div className="airplanes-list">
        <div className="search-bar">
          <h1>Search for your flight</h1>
          <input type="text" placeholder="Flight Number" />
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Origin" />
          <input type="text" placeholder="Destination" />
          <button className="search-button">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchFlight;
