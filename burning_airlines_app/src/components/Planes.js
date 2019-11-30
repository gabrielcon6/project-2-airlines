import React from "react";
import axios from "axios";

export default class Planes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planesList: []
    };
  }

  componentDidMount() {
    const serverURL = `http://localhost:3000/planes.json`;
    axios.get(serverURL).then(res => {
      const myData = res.data;
      this.setState({
        planesList: myData
      });
    });
  }

  render() {
    const myDatabase = this.state.planesList.map((s, id) => (
      <>
        <li key={id}> {s.name} </li>
        <li key={id}> {s.created_at} </li>
      </>
    ));
    return (
      <div>
        <ul>{myDatabase}</ul>
      </div>
    );
  }
}
