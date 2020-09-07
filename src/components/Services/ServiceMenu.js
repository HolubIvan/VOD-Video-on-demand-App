import DataLoader from "../DataLoader/DataLoader";

export default async function serviceMenu(url) {
  const data = await new DataLoader(url).get();
  const discoverLink = [
    { id: "menu-discover", label: "Discover", route: "/discover" },
  ];
  const links = [...data.data, ...discoverLink];
  return links;
}
