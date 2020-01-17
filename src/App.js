import React, { useState } from "react";
import "./App.css";
import Item from "./components/item";
import useList from "./Hooks/useList"

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  // const [list, setList] = useState(initList);
  const items = useList(initList);
  const [editable, setEditable] = useState(false);
  const [checked, setChecked] = useState(false);

  const removeItemHandle = event => {
    event.preventDefault();
    // const filteredItems = list.filter(
    //   value => value.name !== event.target.name
    // );
    // setList(filteredItems);
    items.removeItem(event.target.name);
  };

  const makeEditableHandle = () => {
    setEditable(true);
  }

  const keyPressHandle = (event, index) => {
    if(event.key === "Enter") {
      setEditable(!editable);
      // const copyList = [...list];
      // copyList[index].name = event.target.value;
      items.saveItem(index, event.target.value)
    }
  }

  return (
    <div>
      <div className="grocery-list-main">
        <h2>Grocery List</h2>
        {items.list.map((value, key) => {
          return (
            <Item
              item={value}
              key={`${key}${value.name}${value.calorie}`}
              onClick={removeItemHandle}
              editable={editable}
              checked={checked}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={key}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}

export default App;
