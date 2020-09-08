import React from "react";
import { Input } from "./../../styles/StyledComponents";

const SearchInput = ({ onInputChange, inputRef }) => {
  return (
    <form style={{ height: "0" }}>
      <Input
        type="text"
        placeholder="Looking for..."
        onChange={onInputChange}
        ref={inputRef}
      />
      ;
    </form>
  );
};

export default SearchInput;
