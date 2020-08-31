// // Service
import DataLoader from "../DataLoader/DataLoader";

export default async function servicePopular(url) {
  const data = await new DataLoader(url).get();

  // processing
  console.log(data);
  return data;
}
