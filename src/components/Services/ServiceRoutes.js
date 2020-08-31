import DataLoader from "../DataLoader/DataLoader";

export default async function ServiceRoutes(url) {
  const staticRoutes = ["/movies/:category_id", "/asset/:id"];
  const data = await new DataLoader(url).get();
  data.staticRoutes = staticRoutes;
  return data;
}
