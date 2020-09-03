import React, { useEffect, useState } from "react";
import { AssetsWrapper, Header1 } from "./../../styles/StyledComponents";
import servicePopular from "../Services/servicePopular";
import { popularUrl } from "./../../url/url";
import AssetInCategorie from "./../AssetInCategorie/AssetInCategorie";

const Popular = () => {
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    (async function getPopularFilms() {
      const popularFilms = await servicePopular(popularUrl);
      console.log(popularFilms);
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
        <AssetsWrapper>{popularFilms}</AssetsWrapper>
      </>
    );
  } else {
    return null;
  }
};
export default Popular;
