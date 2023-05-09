import React from "react";

function MenuItem({ image, name, CookTime, recipe }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{CookTime} Mins Cooking Time</p>
      <p>{recipe}</p>
    </div>
  );
}

export default MenuItem;
