import DataLoader from "../DataLoader/DataLoader";

export default async function serviceInputSearch(url) {
  const data = await new DataLoader(url).get();
  return data.data.results;
}
