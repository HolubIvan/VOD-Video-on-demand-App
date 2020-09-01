import React from "react";
import {
  PopularFilm,
  Image,
  DescriptionPopular,
  Paragraph,
  ParagraphBig,
} from "./../../styles/StyledComponents";
import { imageForCategoriesUrl } from "./../../url/url";

const FilmAsset = ({ filmData }) => {
  return (
    <PopularFilm>
      <Image
        src={`${imageForCategoriesUrl}${filmData.poster_path}`}
        alt="no-image"
      ></Image>
      <DescriptionPopular>
        <ParagraphBig>{filmData.original_title}</ParagraphBig>
        <Paragraph>Rating: {filmData.vote_average}/10</Paragraph>
        <Paragraph>Date: {filmData.release_date}</Paragraph>
      </DescriptionPopular>
    </PopularFilm>
  );
};

export default FilmAsset;
