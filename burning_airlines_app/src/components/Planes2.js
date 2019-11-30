// Stage 1
// import React from "react";

// const Planes = () => {
//   return <div>Props</div>;
// };

// export default Planes;

// Final Stage
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Planes = props => {
  const [planesList, setPlanesList] = useState([]);

  useEffect(() => {
    const serverURL = `http://localhost:3000/planes.json`;
    axios.get(serverURL).then(response => {
      const myData = response.data;
      setPlanesList(myData);
    });
  }, []);

  const myDatabase = planesList.map(s => (
    <Fragment key={s.id}>
      <li> {s.name} </li>
      <li> {s.created_at} </li>
    </Fragment>
  ));

  return (
    <div>
      <h1>THIS IS THE RETURN COMPONENT IN PLANE</h1>
      <ul>{myDatabase}</ul>
    </div>
  );
};

export default Planes;
