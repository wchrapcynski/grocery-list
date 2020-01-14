import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  const removeItemHandle = event => {
    event.preventDefault();
    const filteredItems = list.filter(
      value => value.name !== event.target.name
    );
    setList(filteredItems);
  };

  const makeEditableHandle = () => {
    setEditable(true);
  }

  const keyPressHandle = (event, index) => {
    if(event.key === "Enter") {
      setEditable(!editable);
      const copyList = [...list];
      copyList[index].name = event.target.value;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((value, key) => {
          return (
            <Item
              item={value}
              key={`${key}${value.name}${value.calorie}`}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={key}
            ></Item>
          );
        })}
      </header>
    </div>
  );
}

export default App;
