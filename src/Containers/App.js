import React, { useState, useEffect } from "react";
import "./App.css";
import Cardlist from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';

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

  if (!currentRobots){
    return <h1>Loading...</h1>
  }
  else {
     return (
    <div className="tc">
      <h1 className="f1 ">Robofriends</h1>
      <SearchBox searchField={searchField} searchChange={onSearchChange} />
      <Scroll>
        <Cardlist robots={filteredRobots} />;
      </Scroll>
      
    </div>
  );
  }

 
}

export default App;
