import React from "react";
import { Route } from "react-router-dom";
import Home from "./../Home/Home";
import Popular from "./../Popular/Popular";
import Categories from "./../Categories/Categories";
import NotFound from "./../NotFound/NotFound";

const RoutesApp = ({ routes }) => {
  if (routes) {
    const array = routes.data.map((el) => {
      if (el.label === "Home") {
        return <Route key={el.id} exact path={el.route} component={Home} />;
      } else if (el.label === "Categories") {
        return <Route key={el.id} path={el.route} component={Categories} />;
      } else if (el.label === "Popular") {
        return <Route key={el.id} path={el.route} component={Popular} />;
      } else {
        return <Route key="menu-not-found" component={NotFound} />;
      }
    });
    return array;
  }

  return false;
};

export default RoutesApp;

// console.log(routes.data[0].label);

// const Component =
// switch (routes.data[0].label) {

//   case "Home":
//     alert("home");
//     break;

//   case "Categories":
//     break;

//   case "Popular":
//     break;

//   default:
//     break;
// }