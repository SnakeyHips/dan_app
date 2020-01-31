import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Images from "./Pages/Images";
import ViewImage from "./Pages/ViewImage";
import Videos from "./Pages/Videos";
import ViewVideo from "./Pages/ViewVideo";
import Theme from "../styles/theme";
import "./App.css";

const history = createBrowserHistory();

// Scroll to top on route change
history.listen(_ => {
  window.scrollTo(0, 0);
});

export default function App() {
  const title: string = "Dan Gough";

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <HelmetWrapper title={title} description={`${title}`}>
        <Router history={history}>
          <Navigation>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title}`} description={`${title}`}>
                      <Home />
                    </HelmetWrapper>
                  );
                }}
              />
              <Route
                path="/images"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - Images`} description={`Images by ${title}`}>
                      <Images />
                    </HelmetWrapper>
                  );
                }}
              />
              <Route
                path="/image/:id"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - View Image`} description={`${title} - View Image`}>
                      <ViewImage />
                    </HelmetWrapper>
                  );
                }}
              />
              <Route
                path="/videos"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - Videos`} description={`Videos by ${title}`}>
                      <Videos />
                    </HelmetWrapper>
                  );
                }}
              />
              <Route
                path="/video/:id"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - View Video`} description={`${title} - View Video`}>
                      <ViewVideo />
                    </HelmetWrapper>
                  );
                }}
              />
            </Switch>
          </Navigation>
        </Router>
      </HelmetWrapper>
    </ThemeProvider>
  );
}
