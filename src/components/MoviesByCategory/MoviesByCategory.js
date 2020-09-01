import React, { useState, useEffect } from "react";
import AssetInCategorie from "../AssetInCategorie/AssetInCategorie";
import serviceMoviesOfCategorie from "./../Services/serviceMoviesOfCategorie";
import { PopularWrapper, Header1 } from "./../../styles/StyledComponents";

const MoviesByCategory = () => {
  const categorieId = window.location.href.split("/").pop();

  const [idOfCategorie, setIdOfCategorie] = useState(categorieId);
  const [filmsOfCategorie, setFilmsOfCategorie] = useState(null);

  useEffect(() => {
    if (idOfCategorie) {
      async function moviesOfCategorie(idOfCategorie) {
        const url = `https://video-proxy.3rdy.tv/api/vod/category/${idOfCategorie}/assets`;
        const dataMovies = await serviceMoviesOfCategorie(url);
        setFilmsOfCategorie(dataMovies);
      }
      moviesOfCategorie(idOfCategorie);
    }
  }, [idOfCategorie]);

  if (filmsOfCategorie) {
    const popularFilms = filmsOfCategorie.data.results.map((el) => {
      return <AssetInCategorie filmData={el} key={el.id} />;
    });

    return (
      <>
        <Header1>Movies of Categorie</Header1>
        <PopularWrapper>{popularFilms}</PopularWrapper>
      </>
    );
  } else {
    return null;
  }
};

export default MoviesByCategory;
