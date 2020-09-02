import React, { useState, useEffect } from "react";
import { filmDetailUrl, imagesUrl } from "./../../url/url";
import serviceAssetDetail from "./../Services/serviceAssetDetail";
import {
  AssetWrapper,
  ImageOfAsset,
  Description,
  Header3,
  ParagraphLeft,
  ParagraphLeftOrange,
  Button,
  Div,
  Span,
  SpanSmall,
} from "./../../styles/StyledComponents";
import ModalWindow from "./../ModalWindow/ModalWindow";

function getCountries(el) {
  return el.data.production_countries.map((el) => {
    return <ParagraphLeft key={el.name}>{el.name}</ParagraphLeft>;
  });
}

const AssetDetails = () => {
  const filmId = window.location.href.split("/").pop();
  const assetUrl = `${filmDetailUrl}${filmId}`;

  const [assetDetail, setAssetDetail] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    async function getFilmDetails(url) {
      const dataFilm = await serviceAssetDetail(url);
      setAssetDetail(dataFilm);
    }
    getFilmDetails(assetUrl);
  }, [assetUrl]);

  const onAssetButtonClick = (e) => {
    e.preventDefault();
    setIsModalShow(true);
  };

  const onCloseVideoClick = (e) => {
    setIsModalShow(false);
  };

  if (assetDetail) {
    const imagePath = `${imagesUrl}${assetDetail.data.poster_path}`;
    const countries = getCountries(assetDetail);

    return (
      <>
        <AssetWrapper>
          <ImageOfAsset src={imagePath}></ImageOfAsset>
          <Description>
            <Header3>
              {assetDetail.data.original_title} (
              {assetDetail.data.release_date.split("-")[0]})
            </Header3>
            <Div>
              <ParagraphLeftOrange>
                Rating:{" "}
                <Span>
                  {assetDetail.data.vote_average}/10{" "}
                  <SpanSmall>({assetDetail.data.vote_count} votes)</SpanSmall>
                </Span>
              </ParagraphLeftOrange>
            </Div>
            <ParagraphLeftOrange>
              Release date: <Span>{assetDetail.data.release_date}</Span>
            </ParagraphLeftOrange>
            <Div>
              <ParagraphLeftOrange>Countries:</ParagraphLeftOrange> {countries}
            </Div>
            <ParagraphLeftOrange>Overview:</ParagraphLeftOrange>
            <ParagraphLeft>{assetDetail.data.overview}</ParagraphLeft>
          </Description>
          <Button onClick={onAssetButtonClick}>Watch Trailers</Button>
          {isModalShow ? (
            <ModalWindow
              display={isModalShow}
              assetDetail={assetDetail}
              onCloseVideoClick={onCloseVideoClick}
            />
          ) : null}
        </AssetWrapper>
      </>
    );
  } else {
    return null;
  }
};

export default AssetDetails;
