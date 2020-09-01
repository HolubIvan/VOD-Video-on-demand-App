import React, { useState, useEffect } from "react";
import serviceCategories from "./../Services/serviceCategories";
import { categoriesUrl } from "./../../url/url";
import serviceMoviesOfCategorie from "./../Services/serviceMoviesOfCategorie";
import {
  Header2,
  CategoriesWrapper,
  Categorie,
  CategorieName,
} from "./../../styles/StyledComponents";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState(null);
  const [idOfCategorie, setIdOfCategorie] = useState(null);
  const [filmsOfCategorie, setFilmsOfCategorie] = useState(null);

  // effect to get categories of movies
  useEffect(() => {
    (async function getCategories() {
      const dataCategories = await serviceCategories(categoriesUrl);
      setCategoriesData(dataCategories);
    })();
  }, []);

  // effect to get movies of certain categorie by categorie id
  useEffect(() => {
    if (idOfCategorie) {
      async function moviesOfCategorie(idOfCategorie) {
        console.log(idOfCategorie);
        const url = `https://video-proxy.3rdy.tv/api/vod/category/${idOfCategorie}/assets`;
        const dataMovies = await serviceMoviesOfCategorie(url);
        setFilmsOfCategorie(dataMovies);
        console.log(dataMovies);
      }
      moviesOfCategorie(idOfCategorie);
    }
  }, [idOfCategorie]);

  const listenClick = (e) => {
    e.preventDefault();
    setIdOfCategorie(e.target.closest("div").getAttribute("data-id"));
  };

  if (categoriesData) {
    const arrayOfCategoriest = categoriesData.data.genres.map((el) => {
      return (
        <Categorie key={el.id} data-id={el.id}>
          <CategorieName>{el.name}</CategorieName>
        </Categorie>
      );
    });

    return (
      <>
        <Header2>Categories</Header2>
        <CategoriesWrapper onClick={listenClick}>
          {arrayOfCategoriest}
        </CategoriesWrapper>
      </>
    );
  } else {
    return false;
  }
};

export default Categories;
