import React, { useState, useEffect } from "react";
import {
  ModalWrapper,
  Iframe,
  CloseImage,
  VideoWrapper,
} from "./../../styles/StyledComponents";
import { urlExample } from "./../../url/url";
import serviceKeyForYoutube from "./../Services/serviceKeyForYoutube";
import closeImage from "./../../img/close.png";

const ModalWindow = ({ display, assetDetail, onCloseVideoClick }) => {
  const trailerId = assetDetail.data.videos.id;
  const videosOfFilmYoutubeUrl = `${urlExample}api/vod/asset/${trailerId}/videos`;

  const [keyOfVideos, setKeyOfVideos] = useState(null);

  useEffect(() => {
    async function getKeyForYoutube(url) {
      const data = await serviceKeyForYoutube(url);
      setKeyOfVideos(data.data.results[0].key);
    }
    getKeyForYoutube(videosOfFilmYoutubeUrl);
  });

  if (display && keyOfVideos) {
    return (
      <ModalWrapper onClick={onCloseVideoClick}>
        <VideoWrapper>
          <Iframe
            title="video"
            id="ytplayer"
            type="text/html"
            frameBorder="0"
            src={`http://www.youtube.com/embed/${keyOfVideos}`}
            autoPlay="1"
            crossOrigin="anonymous"
          ></Iframe>
          <CloseImage src={closeImage} onClick={onCloseVideoClick} />
        </VideoWrapper>
      </ModalWrapper>
    );
  } else {
    return null;
  }
};

export default ModalWindow;
