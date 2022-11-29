import React from 'react'
import { createContext, useState } from "react";
const IngredintContext = createContext();

export const IngredintProvider=({children}) =>{

    const [AllIngredients, setAllIngredients] = useState([
        //MAKEING INITIAL DATA
        {
          id:28,
          name: "test",
          calories: 8,
          imageURL:"https://kanyonmamtakim.co.il/wp-content/uploads/2021/10/TOFI.jpg"
        },
      ]);

      const AddNewIngredient = (newIng) => {
        newIng.id = AllIngredients.length;
        setAllIngredients([newIng, ...AllIngredients]);
      };

  return (
    <IngredintContext.Provider
      value={{
        AllIngredients,
        AddNewIngredient
        
      }}
    >
      {children}
    </IngredintContext.Provider>
  )
}

export default IngredintContext
