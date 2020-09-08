import DataLoader from "../DataLoader/DataLoader";

export default async function serviceRoutes(url) {
  const staticRoutes = [
    {
      id: "movies-by-categorie",
      label: "Movies-by-Categorie",
      route: "/movies/:category_id",
    },
    {
      id: "asset",
      label: "Asset",
      route: "/asset/:id",
    },
    {
      id: "discover",
      label: "Discover",
      route: "/discover",
    },
    // {
    //   id: "not-found",
    //   label: "NotFound",
    //   route: "*",
    // },
  ];
  const data = await new DataLoader(url).get();
  const routes = [...data.data, ...staticRoutes];
  return routes;
}
