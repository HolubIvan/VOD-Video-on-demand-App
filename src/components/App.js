import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import theme from "./../styles/theme";
import { Wrapper } from "./../styles/StyledComponents";
import { menuUrl } from "./../url/url";
import serviceMenu from "./Services/ServiceMenu";
import serviceRoutes from "./Services/ServiceRoutes";
import NotFound from "./NotFound/NotFound";
import getProperComponentData from "./../utils/getProperComponentData";

class App extends React.Component {
  state = {
    menu: null,
    routes: null,
  };

  async componentDidMount() {
    const appMenu = await serviceMenu(menuUrl);
    this.setState({ menu: appMenu });
    const routes = await serviceRoutes(menuUrl);
    this.setState({ routes: routes });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Router>
            <NavBar menu={this.state.menu ? this.state.menu : false} />

            <Switch>
              {this.state.routes &&
                this.state.routes.map((el) => {
                  const {
                    id,
                    exact,
                    route,
                    Component,
                  } = getProperComponentData(el);

                  return (
                    <Route
                      key={id}
                      exact={exact}
                      path={route}
                      component={Component}
                    />
                  );
                })}
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
