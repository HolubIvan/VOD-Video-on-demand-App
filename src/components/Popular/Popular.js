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

const Popular = () => {
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    (async function getPopularFilms() {
      const popularFilms = await servicePopular(popularUrl);
      setPopularData(popularFilms);
    })();
  }, []);

  if (popularData) {
    const popularFilms = popularData.data.map((el) => {
      return (
        <PopularFilm key={el.id}>
          <Image
            src={`${imageForCategoriesUrl}${el.poster_path}`}
            alt="no-image"
          ></Image>
          <DescriptionPopular>
            <ParagraphBig>{el.original_title}</ParagraphBig>
            <Paragraph>Rating: {el.vote_average}/10</Paragraph>
            <Paragraph>Date: {el.release_date}</Paragraph>
          </DescriptionPopular>
        </PopularFilm>
      );
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
