import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./mixins.scss";

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
  margin: 0 auto;
  font-size: 4rem;
  color: ${({ theme }) => theme.colorOrange || "#fff"};
`;

const Header2 = styled(Header3)`
  margin: 1rem auto;
  font-size: 4.5rem;
  text-shadow: 1px 1px 4px #ffffffd6;
  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

const ParagraphBig = styled(Paragraph)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const ParagraphLeft = styled(Paragraph)`
  text-align: left;
`;

const ParagraphLeftOrange = styled(ParagraphLeft)`
  font-weight: 700;
  color: ${({ theme }) => theme.colorOrange || "#fff"};
`;

const Span = styled.span`
  font-size: 2rem;
  color: #fff;
  font-weight: 400;
`;

const SpanSmall = styled(Span)`
  font-size: 1.4rem;
  font-weight: 300;
`;

// CATEGORIES

const CategoriesWrapper = styled.div`
  width: 95%;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Categorie = styled.div`
  flex-basis: 20%;
  margin: 1rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colorOrange || "coral"};
  transition: all 0.3s;
  cursor: pointer;

  @media (max-width: 1000px) {
    flex-basis: 25%;
  }
  @media (max-width: 700px) {
    flex-basis: 30%;
  }
  @media (max-width: 500px) {
    flex-basis: 60%;
  }

  &: hover {
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

const AssetsWrapper = styled(CategoriesWrapper)`
  // grid-template-columns: repeat(5, 1fr);
`;

const PopularFilm = styled.div`
  width: 220px;
  height: 320px;
  margin: 1rem;
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
  position: relative;

  @media (max-width: 700px) {
    flex-basis: 60%;
    height: 170px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: 100%;
  transition: all 0.3s;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const List = styled.li`
  list-style: none;
  margin: 0 3rem;
  line-height: 60px;

  @media (max-width: 700px) {
    text-align: center;
    line-height: 40px;
  }
`;

const Div = styled.div`
  display: block;
`;

// asset detail

const AssetWrapper = styled.div`
  width: 85%;
  height: 500px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const ImageOfAsset = styled(Image)`
  width: 300px;
  height: 450px;
  box-shadow: 0 10px 15px grey;
  grid-column: 1/3;

  @media (max-width: 900px) {
    grid-column: 2/6;
    display: none;
  }
`;

const Description = styled.div`
  grid-column: 3/6;
  @media (max-width: 900px) {
    grid-column: 1/6;
  }
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  background-color: ${({ theme }) => theme.colorOrange || "coral"};
  border: none;
  border-radius: 7px;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 300;
  text-align: center;
  line-height: 50px;
  display: inline-block;
  margin: 1rem auto;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  box-shadow: 0 3px 7px grey;
  grid-column: 3/6;

  @media (max-width: 900px) {
    grid-column: 1/6;
  }

  @media (max-width: 500px) {
    width: 100px;
    font-size: 1.4rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px grey;
  }
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 3px 7px grey;
  }
`;

// Modal

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #80808085;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px 15px #fff;
`;

const CloseImage = styled(Image)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -4rem;
  right: -4rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
`;

const VideoWrapper = styled.div`
  width: 640px;
  height: 360px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Home

const SliderWrapper = styled.div`
  width: 100%;
  height: 460px;
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 15px 15px #ffffffad;
`;

const SlideImage = styled(Image)`
  object-fit: cover;
`;

const ImageArrow = styled.img`
  width: 60px;
  height: auto;
  display: inline-block;
  position: absolute;
  top: 50%;
  transition: all 0.3s;
  cursor: pointer;

  @media (max-width: 500px) {
    top: 85%;
  }

  &:hover {
    transform: scale(1.07);
    background-color: #ffffff6b;
  }
  &:active {
    transform: scale(1.02);
  }
`;

const ImageArrowLeft = styled(ImageArrow)`
  left: 3%;
`;

const ImageArrowRight = styled(ImageArrow)`
  right: 3%;
`;

const DescriptionBlock = styled.div`
  width: 50rem;
  margin-left: auto;

  @media (max-width: 500px) {
    width: 30rem;
    margin: 0 auto;
  }
`;

const ImageRotated = styled(Image)`
  width: 80px;
  transform: rotate(90deg) translate(4px, 20px);
  @media (max-width: 500px) {
    display: none;
  }
`;

const DescriptionSlider = styled(DescriptionPopular)`
  display: block;
  background-color: #29324145;
`;

const SummaryLinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colorOrange || "coral"};
  }
`;

const ImageLogo = styled(Image)`
  width: 110px;
  position: absolute;
  z-index: 51;
  @media (max-width: 700px) {
    height: auto;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 1.5rem;
  left: 12rem;
  color: #fff;
  border: none;
  background: #3d5a8000;
  border-bottom: 2px solid ${({ theme }) => theme.colorOrange || "coral"};
  font-size: 1.6rem;
  font-weight: 300;
  padding: 5px;
  z-index: 51;
  width: 135px;

  ::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    border: none;
    border: 2px solid ${({ theme }) => theme.colorOrange || "coral"};
  }

  @media (max-width: 700px) {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-45%);
    width: 110px;
  }
`;

//input popup

const InputPopupWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  background-color: #2f2d2df2;
  z-index: 50;
`;

const PopupFilmsWrapper = styled(CategoriesWrapper)`
  width: 90%;
  margin-top: 6rem;
`;

export {
  Wrapper,
  Header1,
  Header2,
  Header3,
  Nav,
  Ul,
  List,
  Div,
  Span,
  SpanSmall,
  CategoriesWrapper,
  Categorie,
  CategorieName,
  AssetsWrapper,
  PopularFilm,
  Image,
  DescriptionPopular,
  Paragraph,
  ParagraphBig,
  ParagraphLeft,
  ParagraphLeftOrange,
  AssetWrapper,
  ImageOfAsset,
  Description,
  Button,
  ModalWrapper,
  Iframe,
  CloseImage,
  VideoWrapper,
  SliderWrapper,
  Slide,
  SlideImage,
  ImageArrowLeft,
  ImageArrowRight,
  DescriptionBlock,
  ImageRotated,
  DescriptionSlider,
  SummaryLinksWrapper,
  ExternalLink,
  ImageLogo,
  Input,
  InputPopupWrapper,
  PopupFilmsWrapper,
};
