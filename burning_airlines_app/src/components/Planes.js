import React from 'react';
import axios from 'axios';

export default class Planes extends React.Component {
    constructor() {
        super();
        this.state = { planesList: []};
    }
    componentDidMount() {
        const serverURL = `http://localhost:3000/planes.json`
        axios.get(serverURL)
        .then(res => {
            const myData = res.data
            this.setState({
                myData
            }) 
            console.log(res);
        }) 
    }
    render() {
        const myDatabase = this.state.planesList.map((s, id) => <li key={id}> { s.name } </li>)
        const myDate = this.state.planesList.map((j, id) => <li key={id}> { j.created_at } </li>)
            return (
                <div>
                    <ul>
                        { myDatabase }
                        { myDate }
                    </ul>
                </div>
            );
        }
    }


