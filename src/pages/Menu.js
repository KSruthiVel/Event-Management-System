import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Events</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
