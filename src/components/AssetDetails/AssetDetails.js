import React, { useState, useEffect } from "react";
import { filmDetailUrl, imagesUrl } from "./../../url/url";
import serviceAssetDetail from "./../Services/serviceAssetDetail";
import {
  AssetWrapper,
  ImageOfAsset,
  Description,
  Header3,
  Paragraph,
  BoldOrangeSpan,
} from "./../../styles/StyledComponents";

const AssetDetails = () => {
  const filmId = window.location.href.split("/").pop();
  const assetUrl = `${filmDetailUrl}${filmId}`;

  const [assetDetail, setAssetDetail] = useState(null);

  useEffect(() => {
    async function getFilmDetails(url) {
      const dataFilm = await serviceAssetDetail(url);
      setAssetDetail(dataFilm);
    }
    getFilmDetails(assetUrl);
  }, [assetUrl]);

  if (assetDetail) {
    const imagePath = `${imagesUrl}${assetDetail.data.poster_path}`;
    const productionCompanies = assetDetail.data.production_companies.map(
      (el) => {
        return `${el.name} `;
      }
    );
    const countries = assetDetail.data.production_countries.map((el) => {
      return `${el.name} `;
    });
    return (
      <>
        <AssetWrapper>
          <ImageOfAsset src={imagePath}></ImageOfAsset>
          <Description>
            <Header3>
              {assetDetail.data.original_title} (
              {assetDetail.data.release_date.split("-")[0]})
            </Header3>
            <Paragraph>
              <BoldOrangeSpan>Production companies:</BoldOrangeSpan>{" "}
              {productionCompanies}
            </Paragraph>
            <Paragraph>
              <BoldOrangeSpan>Release date:</BoldOrangeSpan>{" "}
              {assetDetail.data.release_date}
            </Paragraph>
            <Paragraph>
              <BoldOrangeSpan>Countries:</BoldOrangeSpan> {countries}
            </Paragraph>
            <Paragraph>
              <BoldOrangeSpan>Overview:</BoldOrangeSpan>
            </Paragraph>
            <Paragraph>{assetDetail.data.overview}</Paragraph>
          </Description>
        </AssetWrapper>
      </>
    );
  } else {
    return null;
  }
};

export default AssetDetails;
