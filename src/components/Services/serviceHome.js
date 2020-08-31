import React from "react";
import DataLoader from "./../DataLoader/DataLoader";
import { List } from "./../../styles/StyledComponents";
import { NavLink } from "react-router-dom";

export default async function serviceHome(url) {
  const data = await new DataLoader(url).get();

  // make lists of menu
  const lists = data.data.map((el) => {
    return (
      <List key={el.id}>
        <NavLink to={el.route} className="nav__link">
          {el.label}
        </NavLink>
      </List>
    );
  });

  return lists;
}
