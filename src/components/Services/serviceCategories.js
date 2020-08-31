import { categoriesUrl } from "./../../url/url";
import DataLoader from "./../DataLoader/DataLoader";

export default async function serviceCategories(url) {
  const data = await new DataLoader(url).get();

  //process
  console.log(data);
  return data;
}
