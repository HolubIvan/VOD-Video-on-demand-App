import DataLoader from "../DataLoader/DataLoader";

export default async function serviceRoutes(url) {
  const staticRoutes = ["/movies/", "/asset/"];
  const data = await new DataLoader(url).get();
  for (let i = 0; i < staticRoutes.length; i++) {
    if (i === 0) {
      data.data.push({
        id: "movies-of-categorie",
        label: "Movies by Categorie",
        route: staticRoutes[0],
      });
    } else {
      data.data.push({ id: "asset", label: "Asset", route: staticRoutes[1] });
    }
  }
  console.log(data.data);
  data.staticRoutes = staticRoutes;
  return data;
}
