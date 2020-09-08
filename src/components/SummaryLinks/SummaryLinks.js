import React from "react";
import {
  SummaryLinksWrapper,
  ExternalLink,
} from "./../../styles/StyledComponents";

const SummaryLinks = () => {
  return (
    <SummaryLinksWrapper>
      <ExternalLink href="https://3ss.tv/" target="_blank">
        3SS
      </ExternalLink>
      <ExternalLink href="https://github.com/HolubIvan" target="_blank">
        Ivan Holub
      </ExternalLink>
    </SummaryLinksWrapper>
  );
};

export default SummaryLinks;
