import React, { useState, useEffect } from "react";
import { Header1, ImageRotated } from "./../../styles/StyledComponents";
import { popularUrl } from "./../../url/url";
import servicePopular from "./../Services/servicePopular";
import SliderBox from "./../SliderBox/SliderBox";
import Logo from "./../../img/WTS.png";

const Home = () => {
  const [popularFilms, setPopularFilms] = useState(null);

  useEffect(() => {
    async function getPopularFilms(url) {
      const getFilms = await servicePopular(url);
      setPopularFilms(getFilms);
    }
    getPopularFilms(popularUrl);
  }, []);

  if (popularFilms) {
    return (
      <>
        <Header1>
          WHAT TO SEE
          <ImageRotated src={Logo} />
        </Header1>
        <SliderBox popularFilms={popularFilms} />
      </>
    );
  } else {
    return null;
  }
};

export default Home;
