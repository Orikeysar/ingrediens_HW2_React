import React from "react";
import MakeButton from "./Button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <h2>Wellcom to Dish Master</h2>
      <header id="header">
        <h2>Choose your action</h2>
        <Link to="/Dishes">
          <MakeButton id="btn-new-dish" type="submit" version="secondary">
            Make a new Dish
          </MakeButton>
        </Link>
        <Link to="/Ing">
          <MakeButton id="btn-new-ing" type="submit" version="secondary">
            Make a new Ingredient
          </MakeButton>
        </Link>
      </header>
    </>
  );
}

export default Header;
