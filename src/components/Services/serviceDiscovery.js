import DataLoader from "../DataLoader/DataLoader";

export default async function serviceDiscovery(url, param) {
  const data = await new DataLoader(url, param).post();
  return data.data.results;
}
