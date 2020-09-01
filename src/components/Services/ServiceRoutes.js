import DataLoader from "../DataLoader/DataLoader";

export default async function serviceRoutes(url) {
  const staticRoutes = [
    {
      id: "movies-of-categorie",
      label: "Movies by Categorie",
      route: "/movies/",
    },
    {
      id: "asset",
      label: "Asset",
      route: "/asset/",
    },
    {
      id: "not-found",
      label: "NotFound",
      route: "*",
    },
  ];
  const data = await new DataLoader(url).get();
  const routes = [...data.data, ...staticRoutes];
  return routes;
}
