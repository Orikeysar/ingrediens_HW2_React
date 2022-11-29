import React from 'react'
import { useContext } from "react";
import Dish from './Dish';
import DishContext from './DishProvider';

function DishList() {
    const { AllDishes,AllDishToDone } = useContext(DishContext);
    

  // output if we dont have any Dish
    if ((AllDishToDone.length === 0  && AllDishes.length === 0 )||(!AllDishToDone && !AllDishes )) {
        return <p>Do not have a Dishes yet</p>;
      }

  return (
    
    <div className="dish-list">
    {/* MAP FOR GET EVRY DISH FROM LIST      */}
    <h2>All Ready Dishes To preper: ({AllDishes.length})</h2>
    {AllDishes.map((item) => (
      <div key={item.id}>
        <Dish key={item.id} disable="false" item={item} />
      </div>
    ))}
 
    {/* MAP FOR GET EVRY DISH FROM LIST      */}
    <h2>All Ready Dishes To Eat: ({ AllDishToDone.length})</h2>
    
    {AllDishToDone.map((item) => (
      <div key={item.id}>
        <Dish key={item.id} disable="true" item={item} />
      </div>
    ))}
  </div>
  )
}

export default DishList
