import React, { useState, useEffect } from "react";
import serviceCategories from "./../Services/serviceCategories";
import { categoriesUrl } from "./../../url/url";
import {
  Header1,
  CategoriesWrapper,
  Categorie,
  CategorieName,
} from "./../../styles/StyledComponents";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState(null);

  // effect to get categories of movies
  useEffect(() => {
    (async function getCategories() {
      const dataCategories = await serviceCategories(categoriesUrl);
      console.log(dataCategories);
      setCategoriesData(dataCategories);
    })();
  }, []);

  if (categoriesData) {
    const arrayOfCategoriest = categoriesData.data.genres.map((el) => {
      const path = `/movies/${el.id}`;
      return (
        <Categorie key={el.id} data-id={el.id}>
          <CategorieName to={path}>{el.name}</CategorieName>
        </Categorie>
      );
    });

    return (
      <>
        <Header1>Categories</Header1>
        <CategoriesWrapper>{arrayOfCategoriest}</CategoriesWrapper>
      </>
    );
  } else {
    return null;
  }
};

export default Categories;
