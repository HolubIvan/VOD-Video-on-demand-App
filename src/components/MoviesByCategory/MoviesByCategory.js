import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import AssetInCategorie from "../AssetInCategorie/AssetInCategorie";
import serviceMoviesOfCategorie from "./../Services/serviceMoviesOfCategorie";
import { AssetsWrapper, Header1 } from "./../../styles/StyledComponents";
import ScrollComponent from "./../ScrollComponent/ScrollComponent";
import serviceCategories from "./../Services/serviceCategories";
import { categoriesUrl } from "./../../url/url";
import getProperlyNameOfCategorie from "./../../utils/NameOfCategoryUtil";

function getFilms(el) {
  return el.map((el) => {
    return <AssetInCategorie filmData={el} key={el.id} />;
  });
}

const MoviesByCategory = () => {
  const { category_id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const [idOfCategorie, setIdOfCategorie] = useState(category_id);
  const [filmsOfCategorie, setFilmsOfCategorie] = useState(null);
  const [page, setPage] = useState(1);
  const [nameOfCategorie, setNameOfCategorie] = useState("AAA");

  //effect to get assets of categorie
  useEffect(() => {
    if (idOfCategorie) {
      async function moviesOfCategorie(idOfCategorie) {
        const url = `https://video-proxy.3rdy.tv/api/vod/category/${idOfCategorie}/assets?page=${page}`;
        const dataMovies = await serviceMoviesOfCategorie(url);
        setFilmsOfCategorie(
          filmsOfCategorie
            ? filmsOfCategorie.concat(dataMovies.data.results)
            : dataMovies.data.results
        );
      }
      moviesOfCategorie(idOfCategorie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idOfCategorie, page]);

  //effect to get name of categorie
  useEffect(() => {
    if (idOfCategorie) {
      (async function getCategories() {
        const dataCategories = await serviceCategories(categoriesUrl);
        const getProperlyName = getProperlyNameOfCategorie(
          dataCategories,
          idOfCategorie
        );
        setNameOfCategorie(getProperlyName);
      })();
    }
  }, [idOfCategorie]);

  if (filmsOfCategorie) {
    const filmsArray = getFilms(filmsOfCategorie);

    return (
      <>
        <Header1>{nameOfCategorie}</Header1>
        <AssetsWrapper>
          <ScrollComponent
            filmsArray={filmsArray}
            setPage={setPage}
            page={page}
            filmsOfCategorie={filmsOfCategorie}
          />
        </AssetsWrapper>
      </>
    );
  }
  return null;
};

export default MoviesByCategory;
