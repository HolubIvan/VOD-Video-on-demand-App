import React from "react";
import { Link } from "react-router-dom";
import {
  PopularFilm,
  Image,
  DescriptionPopular,
  Paragraph,
  ParagraphBig,
} from "../../styles/StyledComponents";
import { imagesUrl } from "../../url/url";
import "./AssetInCategorie.scss";

const AssetInCategorie = ({ filmData }) => {
  const path = `/asset/${filmData.id}`;
  return (
    <PopularFilm>
      <Link to={path} className="film-asset">
        <Image
          src={`${imagesUrl}${filmData.poster_path}`}
          alt="no-image"
        ></Image>
        <DescriptionPopular>
          <ParagraphBig>{filmData.original_title}</ParagraphBig>
          <Paragraph>Rating: {filmData.vote_average}/10</Paragraph>
          <Paragraph>Date: {filmData.release_date}</Paragraph>
        </DescriptionPopular>
      </Link>
    </PopularFilm>
  );
};

export default AssetInCategorie;
