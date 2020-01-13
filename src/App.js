import React, { useState } from "react";
import "./App.css";
import Item from "./components/item"

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [list, setlist] = useState(initList);

  const removeUnhealthyHandle = (event) => {
    event.preventDefault();
    // Creates new list with items that are all less than 50 cal.
    const filteredList = list.filter(value => value.calorie <= 50);
    setlist(filteredList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((value, key) => {
          return <Item item={value} key={`${key}${value.name}${value.calorie}`}></Item>
        })}
        <button className="remove-button" onClick={removeUnhealthyHandle}>Remove Unhealthy</button>
      </header>
    </div>
  );
}

export default App;
