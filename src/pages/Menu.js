import React from "react";
import { Menulist } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">"The Cookbook"</h1>
      <div className="menuList">
        {Menulist.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              CookTime={menuItem.CookTime}
              recipe={menuItem.recipe}
            />
          );
        })}
      </div>
     
    </div>
  );
}

export default Menu;
