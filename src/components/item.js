import React from "react";
import "./item.css";

function item(props) {
  return (
    <div className="item-style">
      Item #{props.index + 1}
      <hr className="item-hr"/>
      {props.editable ? (
        <input
          type="text"
          onKeyPress={(event) => props.onKeyPress(event, props.index)}
          defaultValue={props.item.name}
        ></input>
      ) : (
        <p onDoubleClick={props.onDoubleClick}>Name: {props.item.name}</p>
      )}
      <p>Calorie: {props.item.calorie}</p>
      <button
        name={props.item.name}
        className="item-remove-button"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default item;
