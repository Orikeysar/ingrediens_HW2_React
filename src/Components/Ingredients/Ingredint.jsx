import React from "react";
import { createContext } from "react";

function Ingredint({ item }) {
  return (
    <div className="card">
      <div className="text-display">Ingredient Name:{item.name}</div>
      <div className="cal-display">Ingredient Calories:{item.calories}</div>
      <div className="image-display">
        <img alt="" src={item.imageURL}></img>
      </div>
    </div>
  );
}

export default Ingredint;
