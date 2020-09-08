import Home from "./../components/Home/Home";
import Popular from "./../components/Popular/Popular";
import Categories from "./../components/Categories/Categories";
import MoviesByCategory from "./../components/MoviesByCategory/MoviesByCategory";
import AssetDetails from "./../components/AssetDetails/AssetDetails";
import Discover from "./../components/Discover/Discover";

export default function getProperComponentData(el) {
  switch (el.label) {
    case "Home":
      return { ...el, exact: true, Component: Home };
    case "Categories":
      return { ...el, Component: Categories };
    case "Popular":
      return { ...el, Component: Popular };
    case "Movies-by-Categorie":
      return { ...el, Component: MoviesByCategory };
    case "Asset":
      return { ...el, Component: AssetDetails };
    case "Discover":
      return { ...el, Component: Discover };
    default:
  }
}
