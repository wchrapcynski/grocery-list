import React from 'react';
import './item.css'

function item(props) {
    return (
      <div className="item-style">
        <h3>Name: {props.item.name}</h3>
        <h3>Calorie: {props.item.calorie}</h3>
      </div>
    );
}

export default item