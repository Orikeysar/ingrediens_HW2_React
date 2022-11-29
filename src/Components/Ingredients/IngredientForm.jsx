import { useState, useContext } from "react";
import MakeButton from "../Button";
import IngredintContext from "./IngredintProvider.jsx";
import Ingredint from "./Ingredint";
import IngredientList from "./IngredientList";


function IngredientForm() {
  const [name, SetName] = useState("");
  const [calories, SetCalories] = useState("");
  const [imageURL, SetImg] = useState("");
  const { AddNewIngredient } = useContext(IngredintContext);

  const HandleSetBtn = (e) => {
    e.preventDefault();
    const newIng = { name, calories, imageURL };
    AddNewIngredient(newIng);
    SetName("");
    SetCalories("");
    SetImg("");
  };
  const HandleChangeName = (e) => {
    SetName(e.target.value);
  };
  const HandleChangeCalories = (e) => {
    SetCalories(e.target.value);
  };
  const HandleChangeImg = (e) => {
    SetImg(e.target.value);
  };
  return (
    <div className="card">
      <form onSubmit={HandleSetBtn}>
        <h2>Enter new Ingridient</h2>
        <p>
          Name:
          <input
            value={name}
            type="name"
            placeholder="Write a name"
            id="IngNameText"
            onChange={HandleChangeName}
          />
        </p>
        <p>
          calories :
          <input
            value={calories}
            type="calories"
            placeholder="Write the calories"
            id="IngCaloriesTxt"
            onChange={HandleChangeCalories}
          />
        </p>
        <p>
          imageURL:
          <input
            value={imageURL}
            type="imageURL"
            placeholder="Write a imageURL"
            id="IngImageURLTxt"
            onChange={HandleChangeImg}
          />
        </p>
        <MakeButton type="submit" onClick={HandleSetBtn}>
          send
        </MakeButton>
      </form>
    </div>
  );
}

export default IngredientForm;
