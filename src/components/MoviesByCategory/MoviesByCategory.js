import React, { useState, useEffect } from "react";
import FilmAsset from "../FilmAsset/FilmAsset";
import serviceMoviesOfCategorie from "./../Services/serviceMoviesOfCategorie";
import { PopularWrapper, Header2 } from "./../../styles/StyledComponents";

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
      return <FilmAsset filmData={el} key={el.id} />;
    });

    return (
      <>
        <Header2>Movies of Categorie</Header2>
        <PopularWrapper>{popularFilms}</PopularWrapper>
      </>
    );
  } else {
    return false;
  }
};

export default MoviesByCategory;
