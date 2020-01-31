import React, { useState } from "react";
import { Theme } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Images from "./Pages/Images";
import ViewImage from "./Pages/ViewImage";
import Videos from "./Pages/Videos";
import ViewVideo from "./Pages/ViewVideo";
import LightTheme from "../styles/light-theme";
import DarkTheme from "../styles/dark-theme";
import "./App.css";

const history = createBrowserHistory();
const localTheme = window.localStorage.getItem("theme");

// Scroll to top on route change
history.listen(_ => {
  window.scrollTo(0, 0);
});

export default function App() {
  const [theme, setTheme] = useState<Theme>(localTheme === "dark" ? DarkTheme : LightTheme);

  const toggleTheme = () => {
    const prevIsLightTheme = theme === LightTheme;
    prevIsLightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
    window.localStorage.setItem("theme", prevIsLightTheme ? "dark" : "light");
  };

  const title: string = "Dan Gough";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetWrapper title={title} description={`${title}`}>
        <Router history={history}>
          <Navigation toggleTheme={toggleTheme}>
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
              <Route
                path="/contact"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - Contact`} description={`Contact with ${title}`}>
                      <Contact />
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
