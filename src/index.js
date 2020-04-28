import React from "react";
import ReactDOM from "react-dom";
import DataStuff from "./DataStuff";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DataStuff />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
