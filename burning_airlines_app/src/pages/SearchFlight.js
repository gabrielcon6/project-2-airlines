// import React from "react";
import React, { Fragment, Component } from "react";
import axios from "axios";
import "../styles/search.css";
import SearchBox from '../components/SearchBox';

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: '',
      setPlanesList: [],
      setFlightsList: []
    };
  }

  onSeachChange = (event) => {
    this.setState( {searchfield: event.target.value })
  }

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
    const myPlanes = this.state.setPlanesList.map(plane => (
      <Fragment key={plane.id}>
        <li> {plane.name} </li>
      </Fragment>
    ));

    const myFlights = this.state.setFlightsList.map(flight => (
      <Fragment key={flight.id}>
        <li> {flight.name} </li>
        <li> {flight.start_date} </li>
        <li> {flight.origin} </li>
        <li> {flight.destination} </li>
      </Fragment>
    ));

    
    const filteredFlights = this.state.setFlightsList.filter(flight => {
      return flight.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    
    console.log(filteredFlights);
    
    return (
      <div className="airplanes-list">
      <div className="search-bar">
        <h1>Search for your flight</h1>
        <input type="text" placeholder="Flight Number" />
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Origin" />
        <input type="text" placeholder="Destination" />
        <button>Search</button>
      </div>
    </div>
      // <Fragment>
      //   <h1>Hello</h1>
      //   <h1>Hello</h1>
      //   <ul>
      //     <li>{myPlanes}</li><br />
      //     <li>{myFlights}</li><br />
      //     <SearchBox searchChange={this.onSearchChange}/>
      //     {/* <li>{filteredFlights}</li><br /> */}
      //     </ul>
      //   <div>{this.props.propThatImPassingToPlanes}</div>
      // </Fragment>
    );
  }
}

export default SearchFlight;


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
