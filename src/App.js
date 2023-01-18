import React from "react";
import "./App.css";
import { robots } from "./robots";
import Cardlist from "./CardList";

function App() {
  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <Cardlist robots={robots} />;
    </div>
  );
}

export default App;
