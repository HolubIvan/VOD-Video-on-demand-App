import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Popular from "./Popular/Popular";
import Categories from "./Categories/Categories";
import NotFound from "./NotFound/NotFound";
import theme from "./../styles/theme";
import { Wrapper } from "./../styles/StyledComponents";
import serviceHome from "./Services/serviceHome";
import { menuUrl } from "./../url/url";

class App extends React.Component {
  state = {
    menu: null,
  };

  async componentDidMount() {
    const appMenu = await serviceHome(menuUrl);
    this.setState({ menu: appMenu });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Router>
            <NavBar menu={this.state.menu ? this.state.menu : false} />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/categories" component={Categories} />
              <Route path="/popular" component={Popular} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
