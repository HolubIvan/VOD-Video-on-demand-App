import React, { useState, useEffect } from "react";
import { discoverUrl, categoriesUrl } from "./../../url/url";
import serviceDiscovery from "./../Services/serviceDiscovery";
import {
  AssetsWrapper,
  Header1,
  Form,
  Paragraph,
  InputDiscover,
  Select,
  DivCentered,
} from "./../../styles/StyledComponents";
import AssetInCategorie from "./../AssetInCategorie/AssetInCategorie";
import serviceCategories from "./../Services/serviceCategories";
import getOptionsOfSelect from "./../../utils/getOptionsOfSelect";

function getAssetsOfFilms(data) {
  return data.map((el) => {
    return <AssetInCategorie filmData={el} key={el.id} />;
  });
}

const Discover = () => {
  const [filmsData, setFilmsData] = useState(null);
  const [optionsOfSelect, setOptionsOfSelect] = useState(null);
  const [paramOfChange, setParamOfChange] = useState({});
  const [paramWithGenres, setParamWithGenres] = useState([]);
  const [paramWithoutGenres, setParamWithoutGenres] = useState([]);

  useEffect(() => {
    async function getDiscover() {
      const data = await serviceDiscovery(discoverUrl, paramOfChange);
      const categories = await serviceCategories(categoriesUrl);
      setFilmsData(data);
      setOptionsOfSelect(categories);
    }
    getDiscover();
  }, [paramOfChange]);

  const onInputChange = (e) => {
    setParamOfChange({
      ...paramOfChange,
      [e.target.getAttribute("name")]: e.target.value,
    });
  };

  const onSelectChange = (e) => {
    if (e.target.getAttribute("name") === "with_genres") {
      setParamWithGenres([...paramWithGenres, e.target.value]);
      setParamOfChange({
        ...paramOfChange,
        with_genres: paramWithGenres,
      });
    } else {
      setParamWithoutGenres([...paramWithoutGenres, e.target.value]);
      setParamOfChange({
        ...paramOfChange,
        without_genres: paramWithoutGenres,
      });
    }
  };

  if (filmsData && optionsOfSelect) {
    const films = getAssetsOfFilms(filmsData);
    const options = getOptionsOfSelect(optionsOfSelect);
    return (
      <>
        <Header1>Discover world films</Header1>
        <Form>
          <DivCentered>
            <Paragraph>Rating</Paragraph>
            <InputDiscover
              name="vote_average.gte"
              placeholder="From"
              type="number"
              onChange={onInputChange}
            />
            <InputDiscover
              name="vote_average.lte"
              placeholder="To"
              type="number"
              onChange={onInputChange}
            />
          </DivCentered>
          <DivCentered>
            <Paragraph>Release Date</Paragraph>
            <InputDiscover
              name="release_date.gte"
              placeholder="From"
              type="number"
              onChange={onInputChange}
            />
            <InputDiscover
              name="release_date.lte"
              placeholder="To"
              type="number"
              onChange={onInputChange}
            />
          </DivCentered>
          <DivCentered>
            <Paragraph>Include Genres</Paragraph>
            <Select name="with_genres" onChange={onSelectChange}>
              <option value hidden>
                Choose..
              </option>
              {options}
            </Select>
          </DivCentered>
          <DivCentered>
            <Paragraph>Exclude Genres</Paragraph>
            <Select name="without_genres" onChange={onSelectChange}>
              <option value hidden>
                Choose..
              </option>
              {options}
            </Select>
          </DivCentered>
        </Form>
        <AssetsWrapper>{films}</AssetsWrapper>
      </>
    );
  }
  return null;
};

export default Discover;
