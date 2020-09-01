import DataLoader from "../DataLoader/DataLoader";

export default async function serviceAssetDetail(url) {
  const data = await new DataLoader(url).get();
  return data;
}
