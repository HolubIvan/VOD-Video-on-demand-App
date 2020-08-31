import React from "react";
import { Header1 } from "./../../styles/StyledComponents";
import servicePopular from "../Services/servicePopular";
import { popularUrl } from "./../../url/url";

const Popular = () => {
  const popularFilms = servicePopular(popularUrl);

  return <Header1>Popular</Header1>;
};

export default Popular;
