import DataLoader from "../DataLoader/DataLoader";

export default async function serviceCategories(url) {
  const data = await new DataLoader(url).get();
  return data.data.genres;
}
