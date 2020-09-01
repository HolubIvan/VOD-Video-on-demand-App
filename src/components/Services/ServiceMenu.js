import DataLoader from "../DataLoader/DataLoader";

export default async function serviceMenu(url) {
  const data = await new DataLoader(url).get();
  return data;
}
