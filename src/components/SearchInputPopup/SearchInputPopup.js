import React from "react";

import {
  InputPopupWrapper,
  PopupFilmsWrapper,
} from "./../../styles/StyledComponents";
import AssetInCategorie from "./../AssetInCategorie/AssetInCategorie";

const SearchInputPopup = ({ filmsOnInput }) => {
  const films = filmsOnInput.map((el) => {
    return <AssetInCategorie filmData={el} key={el.id} />;
  });
  console.log(films);
  return (
    <InputPopupWrapper>
      <PopupFilmsWrapper>{films}</PopupFilmsWrapper>
    </InputPopupWrapper>
  );
};

export default SearchInputPopup;
