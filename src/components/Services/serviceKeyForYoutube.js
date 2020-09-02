import DataLoader from "../DataLoader/DataLoader";

export default async function serviceKeyForYoutube(url) {
  const data = await new DataLoader(url).get();
  return data;
}
