import React, { Component } from "react";
import axios from "axios";
import "../styles/search.css";
// import SearchBox from "../components/SearchBox";

class MakeBooking extends Component {
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
    return (
      <div className="airplanes-list">
        <div className="search-bar">
          <h1>Make A Booking Or Search For Your Flight</h1>
          <input type="text" placeholder="Flight Number" />
          <input type="date" placeholder="Date" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <div className="seating-icon ">
            <button className="booking-button">Book</button>
            <button className="booking-button">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeBooking;

// const SearchFlight = props => {
//   const [planesList, setPlanesList] = useState([]);
//   const [flightsList, setFlightsList] = useState([]);
//   const [searchfield, setSearchfield] = useState('');

//   useEffect(() => {
//     const serverPlaneURL = `http://localhost:3000/planes.json`;
//     axios.get(serverPlaneURL).then(response => {
//       const myData = response.data;
//       setPlanesList(myData);
//     });
//     const serverFlightURL = `http://localhost:3000/flights.json`;
//     axios.get(serverFlightURL).then(response => {
//       const myData = response.data;
//       console.log("myData :", myData);
//       setFlightsList(myData);
//     });
//   }, []);

//   const myDatabase = planesList.map(planes => (
//     <Fragment key={planes.id}>
//       <li> {planes.name} </li>
//       <li> {planes.created_at} </li>
//     </Fragment>
//   ));

//   const myFlights = flightsList.map(flight => (
//     <Fragment key={flight.id}>
//       <li> {flight.name} </li>
//       <li> {flight.origin} </li>
//       <li> {flight.destination} </li>
//       <li> {flight.created_at} </li>
//     </Fragment>
//   ));

//   const onSearchChange = (event) => {
//     console.log(event.target.value);
//     setSearchfield(event.target.value);
//     const filteredFlights = planesList.filter(flights => {
//       return planesList.name.toLowerCase().includes(searchfield.toLowerCase());
//     })
//     console.log(filteredFlights);
//   }

//   return (
//     <div className="search">
//       <h2>this is the Search Component</h2>
//       <h3> THIS IS NOT SHOWING </h3>
//       <ul>
//       <li>{myDatabase}</li><br />
//       <li>{myFlights}</li> <br />
//       <SearchBox searchChange={onSearchChange}/>
//       </ul>
//     </div>
//   );
// };

// export default SearchFlight;
