import React from "react";

import "./App.css";
import SelectionComponent from "./components/SelectionComponent";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Customer Feedback</h1>

      <div className="sections-container">
        <SelectionComponent title={"Customer"} borderRight={true} />
        <SelectionComponent title={"Feedback"} borderRight={false} />
      </div>
    </div>
  );
}

export default App;
