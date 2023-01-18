import React, { useState } from "react";
import "./App.css";
import { robots } from "./robots";
import Cardlist from "./CardList";
import SearchBox from './SearchBox';

function App() {
  const [currentRobots] = useState(robots);
  const [searchField, setSearchField ]= useState('');

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredRobots = currentRobots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className="tc">
      <h1 className="f1 ">Robofriends</h1>
      <SearchBox searchField={searchField} searchChange={onSearchChange}/>
      <Cardlist robots={filteredRobots} />;
    </div>
  );
}

export default App;
