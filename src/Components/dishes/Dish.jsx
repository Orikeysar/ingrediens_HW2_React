import React from "react";
import MakeButton from "../Button";
import { useContext } from "react";
import DishContext from "./DishProvider";
import { useState } from "react";

function Dish({ item, disable }) {
  const { AddNewDishToDone,DeleteDishFromAllDishes, AddNewDish,DeleteDishFromAllDishesDone } = useContext(DishContext);

const [isPreper,SetPreper] = useState("");

  const HandleDishSetBtnDone = (e) => {
    SetPreper(true)
    item.isPreper = true;
    e.preventDefault();
    DeleteDishFromAllDishes(item.id);
    AddNewDishToDone(item);
  };
  const HandleDishSetBtnEat = (e) => {
    SetPreper(true)
    item.isPreper = false;
    e.preventDefault();
    DeleteDishFromAllDishesDone(item.id);
    AddNewDish(item);
  };
  if(item.isPreper){
    return (
      <form onClick={HandleDishSetBtnEat}>
        <div className="card">
          <div className="text-display">Dish Name: {item.name}</div>
          <div className="text-display">Dish Time: {item.time}</div>
          <div className="text-display">Dish Calories: {item.calories}</div>
          <div className="text-display">
            Dish Cooking Method: {item.cookingMethod}
          </div>
          <div className="image-display">
            <img alt="" src={item.imageURL}></img>
          </div>
          <MakeButton
            type="submit"
            disable={disable}
            onClick={() => {
              HandleDishSetBtnEat(item);
            }}
          >
            Eat
          </MakeButton>
        </div>
      </form>
    );

  }

  return (
    <form onClick={HandleDishSetBtnDone}>
      <div className="card">
        <div className="text-display">Dish Name: {item.name}</div>
        <div className="text-display">Dish Time: {item.time}</div>
        <div className="text-display">Dish Calories: {item.calories}</div>
        <div className="text-display">
          Dish Cooking Method: {item.cookingMethod}
        </div>
        <div className="image-display">
          <img alt="" src={item.imageURL}></img>
        </div>
        <MakeButton
          type="submit"
          disable={disable}
          onClick={() => {
            HandleDishSetBtnDone(item);
          }}
        >
          Done Dish
        </MakeButton>
      </div>
    </form>
  );
}

export default Dish;
