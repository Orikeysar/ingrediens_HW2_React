import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import Ingredint from "./Ingredint";
import IngredintContext from "./IngredintProvider";

function IngredientList() {
  const { AllIngredients } = useContext(IngredintContext);

  // output if we dont have any ing
  if (!AllIngredients || AllIngredients.length === 0) {
    return <p>Do not have a ingredient yet</p>;
  }
  return (
    <div className="ing-list">
      {/* MAP FOR GET EVRY ING FROM LIST      */}
      {AllIngredients.map((item) => (
        <div key={item.id}>
          <Ingredint key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
}

export default IngredientList;
