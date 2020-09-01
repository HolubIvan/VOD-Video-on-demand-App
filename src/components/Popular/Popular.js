import React, { useEffect, useState } from "react";
import { PopularWrapper, Header1 } from "./../../styles/StyledComponents";
import servicePopular from "../Services/servicePopular";
import { popularUrl } from "./../../url/url";
import AssetInCategorie from "./../AssetInCategorie/AssetInCategorie";

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
      return <AssetInCategorie filmData={el} key={el.id} />;
    });

    return (
      <>
        <Header1>Popular films</Header1>
        <PopularWrapper>{popularFilms}</PopularWrapper>
      </>
    );
  } else {
    return null;
  }
};
export default Popular;
