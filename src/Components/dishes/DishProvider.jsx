import React from "react";
import { createContext, useState } from "react";
const DishContext = createContext();

export const DishProvider=({children}) => {

  const [AllDishes, setAllDishes] = useState(
    [
    //MAKEING INITIAL DATA
    {
      id: 28,
      name: "Chicken",
      time: "2 hours",
      calories: 162.5,
      cookingMethod: "on fire",
      isPreper:false,
      imageURL:
        "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80",
    },
  ]
  );
  const [AllDishToDone, setAllDishToDone] = useState([
    {
        id: 10,
        name: "fila",
        time: "7 hours",
        calories: 162.5,
        cookingMethod: "on fire",
        isPreper:true,
        imageURL:
          "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },//MAKEING INITIAL DATA
  
  ]);
  const AddNewDish = (newDish) => {
    if (newDish.id === null) {
    newDish.id = AllDishes.length;
    }
    setAllDishes([newDish, ...AllDishes]);
  };
  const AddNewDishToDone = (newDish) => {
if (newDish.id === null) {
   newDish.id = AllDishToDone.length;
}
   
    setAllDishToDone([newDish, ...AllDishToDone]);
  };

  const DeleteDishFromAllDishes =(id)=>{

    setAllDishes(AllDishes.filter((item) => item.id !== id))

  }
  const DeleteDishFromAllDishesDone =(id)=>{

    setAllDishToDone(AllDishToDone.filter((item) => item.id !== id))

  }
  return (
    <DishContext.Provider
      value={{
        AllDishToDone,
        AllDishes,
        AddNewDish,
        AddNewDishToDone,
        DeleteDishFromAllDishes,
        DeleteDishFromAllDishesDone,
      }}
    >
      {children}
    </DishContext.Provider>
  )
}

export default DishContext;
