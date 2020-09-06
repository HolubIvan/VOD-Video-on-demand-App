import React, { useState, useEffect, useRef } from "react";
import { Nav, Ul } from "./../../styles/StyledComponents";
import "./NavBar.scss";
import { List, ImageLogo } from "../../styles/StyledComponents";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/WTS.png";
import SearchInput from "./../SearchInput/SearchInput";
import { searchUrl } from "./../../url/url";
import serviceInputSearch from "./../Services/serviceInputSearch";
import SearchInputPopup from "./../SearchInputPopup/SearchInputPopup";

const NavBar = ({ menu }) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(null);
  const [popupShow, setPopupShow] = useState(false);
  const [filmsOnInput, setFilmsOnInput] = useState(null);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setPopupShow(true);
    } else {
      setPopupShow(false);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (inputValue) {
      setTimeout(() => {
        async function getSearchRequest() {
          const url = `${searchUrl}${inputValue}`;
          const data = await serviceInputSearch(url);
          setFilmsOnInput(data);
        }
        getSearchRequest();
        window.addEventListener("click", onInputChange);
      }, 500);
    }
    return () => {
      window.removeEventListener("click", onInputChange);
    };
  }, [inputValue]);

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
      <>
        <Nav>
          <ImageLogo src={Logo} alt="logo"></ImageLogo>

          {popupShow && filmsOnInput ? (
            <SearchInputPopup filmsOnInput={filmsOnInput} />
          ) : (
            ""
          )}
          <SearchInput onInputChange={onInputChange} inputRef={inputRef} />
          <Ul>{lists}</Ul>
        </Nav>
      </>
    );
  }
  return null;
};

export default NavBar;
