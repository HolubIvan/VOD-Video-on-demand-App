import React from "react";
import { Nav, Ul } from "./../../styles/StyledComponents";
import "./NavBar.scss";
import { List } from "../../styles/StyledComponents";
import { NavLink } from "react-router-dom";

const NavBar = ({ menu }) => {
  if (menu) {
    const lists = menu.data.map((el) => {
      return (
        <List key={el.id}>
          <NavLink to={el.route} className="nav__link">
            {el.label}
          </NavLink>
        </List>
      );
    });

    return (
      <Nav>
        <Ul>{lists}</Ul>
      </Nav>
    );
  }
  return false;
};

export default NavBar;
