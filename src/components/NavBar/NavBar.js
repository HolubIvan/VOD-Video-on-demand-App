import React from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  Header1,
  Nav,
  Ul,
  List,
} from "./../../styles/StyledComponents";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <List>
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </List>
        <List>
          <NavLink to="/categories" className="nav__link">
            Categories
          </NavLink>
        </List>
        <List>
          <NavLink to="/popular" className="nav__link">
            Popular
          </NavLink>
        </List>
      </Ul>
    </Nav>
  );
};

export default NavBar;
