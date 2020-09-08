import React from "react";
import { Nav, Ul } from "./../../styles/StyledComponents";
import "./NavBar.scss";
import { List, Image } from "../../styles/StyledComponents";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/WTS.png";

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
        <Image
          src={Logo}
          alt="logo"
          style={{ width: "110px", position: "absolute" }}
        ></Image>
        <Ul>{lists}</Ul>
      </Nav>
    );
  }
  return null;
};

export default NavBar;
