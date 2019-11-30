import React from "react";
import Planes from "./Planes2";

const somethingReallyHard = "lol";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Planes propThatImPassingToPlanes={somethingReallyHard} />
    </div>
  );
}

export default App;
