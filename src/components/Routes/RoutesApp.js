import React from "react";
import { Route } from "react-router-dom";
import Home from "./../Home/Home";
import Popular from "./../Popular/Popular";
import Categories from "./../Categories/Categories";
import NotFound from "./../NotFound/NotFound";
import MoviesByCategory from "./../MoviesByCategory/MoviesByCategory";
import AssetDetails from "./../AssetDetails/AssetDetails";

function getProperComponentData(el) {
  switch (el.label) {
    case "Home":
      return { ...el, exact: true, Component: Home };
    case "Categories":
      return { ...el, Component: Categories };
    case "Popular":
      return { ...el, Component: Popular };
    case "Movies by Categorie":
      return { ...el, Component: MoviesByCategory };
    case "Asset":
      return { ...el, Component: AssetDetails };
    case "NotFound":
      return { ...el, Component: NotFound };
    default:
      return { ...el, Component: NotFound };
  }
}

const RoutesApp = ({ routes }) => {
  if (routes) {
    console.log(routes);
    const array = routes.map((el) => {
      const { id, exact, route, Component } = getProperComponentData(el);
      return (
        <Route key={id} exact={exact} path={route} component={Component} />
      );
    });

    return array;
  }

  return null;
};

export default RoutesApp;

// if (el.label === "Home") {
// return <Route key={el.id} exact path={el.route} component={Home} />
// } else if (el.label === "Categories") {
//   return <Route key={el.id} path={el.route} component={Categories} />;
// } else if (el.label === "Popular") {
//   return <Route key={el.id} path={el.route} component={Popular} />;
// } else if (el.label === "Movies by Categorie") {
//   return (
//     <Route key={el.id} path={el.route} component={MoviesByCategory} />
//   );
// } else if (el.label === "Asset") {
//   return <Route key={el.id} path={el.route} component={AssetDetails} />;
// } else {
//   return <Route key="not-found" path="*" component={NotFound} />;
// }
