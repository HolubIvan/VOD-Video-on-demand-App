import React, { useState, useEffect } from "react";
import {
  SliderWrapper,
  ImageArrowLeft,
  ImageArrowRight,
} from "./../../styles/StyledComponents";
import Slider from "./../Slider/Slider";
import ArrowLeft from "./../../img/carousel-left.svg";
import ArrowRight from "./../../img/carousel-right.svg";

const SliderBox = ({ popularFilms }) => {
  const [index, setIndex] = useState(0);
  const [filmObject, setFilmObject] = useState(null);

  useEffect(() => {
    setFilmObject(popularFilms.data[index]);
  }, [index, popularFilms]);

  const onArrowClick = (e) => {
    if (e.target.getAttribute("data-arrow") === "left") {
      if (index === 0) {
        setIndex(popularFilms.data.length - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      console.log(index);
      if (index > popularFilms.data.length - 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  if (filmObject) {
    return (
      <>
        <SliderWrapper>
          <Slider filmObject={filmObject} />
          <ImageArrowLeft
            onClick={onArrowClick}
            src={ArrowLeft}
            alt="arrow-left"
            data-arrow="left"
          />
          <ImageArrowRight
            onClick={onArrowClick}
            src={ArrowRight}
            alt="arrow-right"
            data-arrow="right"
          />
        </SliderWrapper>
      </>
    );
  }
  return null;
};

export default SliderBox;
