import React, { useState } from "react";
import "./App.css";
import Cardlist from "./CardList";
import SearchBox from "./SearchBox";
import { useEffect } from "react";

function App() {
  const [currentRobots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = currentRobots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1 ">Robofriends</h1>
      <SearchBox searchField={searchField} searchChange={onSearchChange} />
      <Cardlist robots={filteredRobots} />;
    </div>
  );
}

export default App;
