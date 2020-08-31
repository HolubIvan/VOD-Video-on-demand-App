import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colorBlueLight || "#000"};
`;

const Header1 = styled.h1`
  color: ${({ theme }) => theme.colorWhite || "#000"};
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  margin-top: 5rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colorOrange || "#fff"};
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Header2 = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  margin: 3rem auto;
  text-align: center;
`;

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

const CategorieName = styled.p`
  margin: 0 auto;
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 70px;
  height: 70px;
`;

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
`;

const List = styled.li`
  list-style: none;
  margin: 0 3rem;
  margin-top: 1.8rem;
`;

export {
  Wrapper,
  Header1,
  Nav,
  Ul,
  List,
  Header2,
  CategoriesWrapper,
  Categorie,
  CategorieName,
};
