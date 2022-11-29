import React from 'react'
import { useState, useContext } from "react";
import MakeButton from '../Button';
import DishContext from './DishProvider';

function DishForm() {
    const [name, SetName] = useState("");
    const [calories, SetCalories] = useState("");
    const [time, SetTime] = useState("");
    const [cookingMethod, SetCookingMethod] = useState("");
    const [imageURL, SetImg] = useState("");
    const { AddNewDish } = useContext(DishContext);
    const [isPreper, SetisPreper] = useState("");

    const HandleDishSetBtn = (e) => {
        e.preventDefault();
        SetisPreper(false)
        const newDish = { name,time,cookingMethod, calories, imageURL,isPreper };
        AddNewDish(newDish);
        SetName("");
        SetCalories("");
        SetImg("");
        SetTime("");
        SetCookingMethod("");
      };
    
      const HandleChangeDishName = (e) => {
        SetName(e.target.value);
      };
      const HandleChangeDishCalories = (e) => {
        SetCalories(e.target.value);
      };
      const HandleChangeDishImg = (e) => {
        SetImg(e.target.value);
      };
      const HandleChangeDishTime = (e) => {
        SetTime(e.target.value);
      };
      const HandleChangeDishCookingMethod = (e) => {
        SetCookingMethod(e.target.value);
      };


  return (
    <div className="card">
    <form onSubmit={HandleDishSetBtn}>
      <h2>Enter new Dish</h2>
      <p>
        Name:
        <input
          value={name}
          type="name"
          placeholder="Write a name"
          id="IngNameText"
          onChange={HandleChangeDishName}
        />
      </p>
      <p>
        calories :
        <input
          value={calories}
          type="calories"
          placeholder="Write the calories"
          id="IngCaloriesTxt"
          onChange={HandleChangeDishCalories}
        />
      </p>
      <p>
        Coocking Time:
        <input
         id="appt"
          value={time}
          type="time"
         
          onChange={HandleChangeDishTime}
        />
      </p>
      <p>
        Coocking Method:
        <input
          value={cookingMethod}
          type="cookingMethod"
          placeholder="Write coocking Method"
          id="DishCookingMethodText"
          onChange={HandleChangeDishCookingMethod}
        />
      </p>
      <p>
        imageURL:
        <input
          value={imageURL}
          type="imageURL"
          placeholder="Write a imageURL"
          id="IngImageURLTxt"
          onChange={HandleChangeDishImg}
        />
      </p>
      <MakeButton type="submit" onClick={HandleDishSetBtn}>
        send
      </MakeButton>
    </form>
  </div>
  )
}

export default DishForm
