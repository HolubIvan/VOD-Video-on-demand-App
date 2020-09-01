import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colorBlueLight || "#000"};
`;

const Header1 = styled.h1`
  color: ${({ theme }) => theme.colorWhite || "#000"};
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  margin: 3rem auto;
  text-align: center;
`;

const Header3 = styled(Header1)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colorOrange || "#fff"};
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

const ParagraphBig = styled(Paragraph)`
  font-size: 3rem;
`;

// CATEGORIES

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 90%;
  margin: 3rem auto;
`;

const Categorie = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colorOrange || "coral"};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 10px ${({ theme }) => theme.colorGreyLight || "grey"};
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 3px 5px ${({ theme }) => theme.colorGreyLight || "grey"};
  }
`;

const CategorieName = styled(NavLink)`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 70px;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  z-index: 10;
`;

// POPULAR

const PopularWrapper = styled(CategoriesWrapper)`
  grid-template-columns: repeat(5, 1fr);
`;

const PopularFilm = styled.div`
  width: 220px;
  height: 320px;
  position: relative;
  cursor: pointer;

  &:hover * {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const DescriptionPopular = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2932419e;
  display: none;
`;

// NAVIGATION

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colorGreyLight || "coral"};
  box-shadow: 0 4px 10px ${({ theme }) => theme.colorGreyLight || "coral"};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: 100%;
`;

const List = styled.li`
  list-style: none;
  margin: 0 3rem;
  line-height: 60px;
`;

// asset detail

const AssetWrapper = styled.div`
  width: 85%;
  height: 500px;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
`;

const ImageOfAsset = styled(Image)`
  width: auto;
  box-shadow: 0 10px 15px grey;
  margin-right: 2rem;
`;

const Description = styled.div`
  flex: 1;
`;

const BoldOrangeSpan = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colorOrange || "#fff"};
`;

export {
  Wrapper,
  Header1,
  Nav,
  Ul,
  List,
  CategoriesWrapper,
  Categorie,
  CategorieName,
  PopularWrapper,
  PopularFilm,
  Image,
  DescriptionPopular,
  Paragraph,
  ParagraphBig,
  AssetWrapper,
  ImageOfAsset,
  Description,
  Header3,
  BoldOrangeSpan,
};
