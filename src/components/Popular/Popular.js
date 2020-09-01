import React, { useEffect, useState } from "react";
import {
  PopularWrapper,
  Header2,
  PopularFilm,
  Image,
  DescriptionPopular,
  Paragraph,
  ParagraphBig,
} from "./../../styles/StyledComponents";
import servicePopular from "../Services/servicePopular";
import { popularUrl, imageForCategoriesUrl } from "./../../url/url";
import FilmAsset from "./../FilmAsset/FilmAsset";

const Popular = () => {
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    (async function getPopularFilms() {
      const popularFilms = await servicePopular(popularUrl);
      setPopularData(popularFilms);
    })();
  }, []);

  if (popularData) {
    console.log(popularData);
    const popularFilms = popularData.data.map((el) => {
      return <FilmAsset filmData={el} key={el.id} />;
    });

    return (
      <>
        <Header2>Popular films</Header2>
        <PopularWrapper>{popularFilms}</PopularWrapper>
      </>
    );
  } else {
    return false;
  }
};
export default Popular;
