import React from "react";
import "./item.css";

function item(props) {
  return (
    <div className="item-style">
      {props.editable ? (
        <input
          type="text"
          onKeyPress={(event) => props.onKeyPress(event, props.index)}
          defaultValue={props.item.name}
        ></input>
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>Name: {props.item.name}</h3>
      )}
      <h3>Calorie: {props.item.calorie}</h3>
      <button
        name={props.item.name}
        className="remove-button"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default item;
