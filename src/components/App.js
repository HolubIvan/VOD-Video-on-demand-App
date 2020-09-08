import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import theme from "./../styles/theme";
import { Wrapper } from "./../styles/StyledComponents";
import { menuUrl } from "./../url/url";
import serviceMenu from "./Services/ServiceMenu";
import serviceRoutes from "./Services/ServiceRoutes";
import RoutesApp from "./Routes/RoutesApp";
import NotFound from "./NotFound/NotFound";

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
              <RoutesApp
                routes={this.state.routes ? this.state.routes : false}
              />
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;

// <Route exact path="/" component={Home} />
// <Route path="/categories" component={Categories} />
// <Route path="/popular" component={Popular} />
// <Route path="*" component={NotFound} />
