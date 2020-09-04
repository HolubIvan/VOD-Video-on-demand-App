import React from "react";
import {
  Slide,
  DescriptionPopular,
  Paragraph,
  SlideImage,
  DescriptionBlock,
  Button,
  Header2,
} from "../../styles/StyledComponents";
import { Link } from "react-router-dom";
import "./Slider.scss";

const Slider = ({ filmObject }) => {
  const imagePath = `https://image.tmdb.org/t/p/original/${filmObject.backdrop_path}`;
  const linkPath = `/asset/${filmObject.id}`;

  return (
    <Slide>
      <SlideImage src={imagePath} alt="no-image" />
      <DescriptionPopular
        style={{ display: "block", backgroundColor: "#29324145" }}
      >
        <DescriptionBlock>
          <Header2>{filmObject.original_title}</Header2>
          <Paragraph>Release date: {filmObject.release_date}</Paragraph>
          <Link to={linkPath} className="button-link">
            <Button style={{ marginTop: "1rem" }}>Explore</Button>
          </Link>
        </DescriptionBlock>
      </DescriptionPopular>
    </Slide>
  );
};

export default Slider;
