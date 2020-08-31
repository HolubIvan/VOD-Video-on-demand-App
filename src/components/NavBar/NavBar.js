import React from "react";
import { Nav, Ul } from "./../../styles/StyledComponents";
import "./NavBar.scss";

const NavBar = ({ menu }) => {
  return (
    <Nav>
      <Ul>{menu}</Ul>
    </Nav>
  );
};

export default NavBar;
