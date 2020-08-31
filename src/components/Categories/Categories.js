import React from "react";
import { Header1 } from "./../../styles/StyledComponents";
import serviceCategories from "./../Services/serviceCategories";
import { categoriesUrl } from "./../../url/url";

const Categories = () => {
  const data = serviceCategories(categoriesUrl);
  return <Header1>Categories</Header1>;
};

export default Categories;
