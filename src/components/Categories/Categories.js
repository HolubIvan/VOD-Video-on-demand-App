import React, { useState, useEffect } from "react";
import serviceCategories from "./../Services/serviceCategories";
import { categoriesUrl } from "./../../url/url";
import {
  Wrapper,
  Header1,
  Nav,
  Ul,
  List,
  Header2,
  CategoriesWrapper,
  Categorie,
  CategorieName,
} from "./../../styles/StyledComponents";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState(null);

  useEffect(() => {
    (async function getCategories() {
      const data = await serviceCategories(categoriesUrl);
      setCategoriesData(data);
    })();
  }, []);

  if (categoriesData) {
    const array = categoriesData.data.genres.map((el) => {
      return (
        <Categorie key={el.id}>
          <CategorieName>{el.name}</CategorieName>
        </Categorie>
      );
    });

    return (
      <>
        <Header2>Categories</Header2>
        <CategoriesWrapper>{array}</CategoriesWrapper>
      </>
    );
  } else {
    return false;
  }
};

export default Categories;
