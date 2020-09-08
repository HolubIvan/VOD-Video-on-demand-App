import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ParagraphBig } from "./../../styles/StyledComponents";
import "./ScrollComponent.scss";

const ScrollComponent = ({ filmsArray, page, setPage, filmsOfCategorie }) => {
  return (
    <InfiniteScroll
      dataLength={filmsOfCategorie.length}
      next={() => {
        setPage(page + 1);
      }}
      hasMore={true}
      loader={
        <ParagraphBig style={{ gridColumn: "1/6" }}>Loading...</ParagraphBig>
      }
      endMessage={
        <ParagraphBig style={{ gridColumn: "1/6" }}>
          Yay! You have seen it all
        </ParagraphBig>
      }
      className="scroll-component"
    >
      {filmsArray}
    </InfiniteScroll>
  );
};

export default ScrollComponent;
