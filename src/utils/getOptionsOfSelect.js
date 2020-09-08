import React from "react";

export default function getOptionsOfSelect(data) {
  return data.map((el) => {
    return (
      <option value={el.id} key={el.id}>
        {el.name}
      </option>
    );
  });
}
