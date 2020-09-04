import React, { useState, useEffect } from "react";
import { Header1, AssetsWrapper } from "./../../styles/StyledComponents";
import servicePopular from "../Services/servicePopular";
import { popularUrl } from "./../../url/url";
import AssetInCategorie from "./../AssetInCategorie/AssetInCategorie";

function getThreePopularFilms(films) {
  const lastThreeEl = films.data.slice(-3);
  return lastThreeEl.map((el) => {
    return <AssetInCategorie filmData={el} key={el.id} />;
  });
}

const NotFound = () => {
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    (async function getPopularFilms() {
      const popularFilms = await servicePopular(popularUrl);
      setPopularData(popularFilms);
    })();
  }, []);

  if (popularData) {
    const films = getThreePopularFilms(popularData);

    return (
      <>
        <Header1>Not found...sorry!</Header1>
        <AssetsWrapper>{films}</AssetsWrapper>
      </>
    );
  }
  return null;
};

export default NotFound;
