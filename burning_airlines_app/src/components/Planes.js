import React, { Component, Fragment } from "react";
import axios from "axios";
import "../styles/search.css";


export default class Planes extends Component {
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
    const myDatabase = this.state.planesList.map(s => (
      <Fragment key={s.id}>
        <li> {s.name} </li>
      </Fragment>
    ));
    return (
      <div>
        <ul>{myDatabase}</ul>
        <div>{this.props.propThatImPassingToPlanes}</div>
      </div>
    );
  }
}
