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

  useEffect(() => {
    async function getDiscover() {
      const data = await serviceDiscovery(discoverUrl, paramOfChange);
      const categories = await serviceCategories(categoriesUrl);
      setFilmsData(data);
      setOptionsOfSelect(categories);
    }
    getDiscover();
  }, [paramOfChange]);

  const onChangeEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.getAttribute("name"));
    setParamOfChange({
      ...paramOfChange,
      [e.target.getAttribute("name")]: e.target.value,
    });
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
              onChange={onChangeEvent}
            />
            <InputDiscover
              name="vote_average.lte"
              placeholder="To"
              type="number"
              onChange={onChangeEvent}
            />
          </DivCentered>
          <DivCentered>
            <Paragraph>Release Date</Paragraph>
            <InputDiscover
              name="release_date.gte"
              placeholder="From"
              type="number"
              onChange={onChangeEvent}
            />
            <InputDiscover
              name="release_date.lte"
              placeholder="To"
              type="number"
              onChange={onChangeEvent}
            />
          </DivCentered>
          <DivCentered>
            <Paragraph>Include Genres</Paragraph>
            <Select name="with_genres" onChange={onChangeEvent}>
              <option value hidden>
                Choose..
              </option>
              {options}
            </Select>
          </DivCentered>
          <DivCentered>
            <Paragraph>Exclude Genres</Paragraph>
            <Select name="without_genres" onChange={onChangeEvent}>
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

// display: flex;
//     flex-direction: column;
//     align-items: center;
