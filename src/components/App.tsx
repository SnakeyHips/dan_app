import React, { useState } from "react";
import { Theme } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import StemJobs from "./Pages/StemJobs";
import ViewJob from "./Pages/ViewJob";
import StemBlogs from "./Pages/StemBlogs";
import ViewBlog from "./Pages/ViewBlog";
import Privacy from "./Pages/Privacy";
import AdminJobs from "./Admin/AdminJobs";
import AdminBlogs from "./Admin/AdminBlogs";
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

  const title: string = "Dan's Rockin' Stuff";

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
                  <HelmetWrapper
                    title={`${title}`}
                    description={`What we do at ${title}`}
                  >
                    <Home />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/services"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Services`}
                    description={`What services we provide at ${title}`}
                  >
                    <Services />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/jobs"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Jobs`}
                    description={`Current opportunities provided by ${title}`}
                  >
                    <StemJobs />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/job/:id"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - View Job`}
                    description={`${title} - View Job`}
                  >
                    <ViewJob />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/blogs"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - Blogs`}
                    description={`News & Advice Blogs provided by ${title}`}
                  >
                    <StemBlogs />
                  </HelmetWrapper>
                );
              }}
            />
            <Route
              path="/blog/:id"
              exact
              render={() => {
                return (
                  <HelmetWrapper
                    title={`${title} - View Blog`}
                    description={`${title} - View Blog`}
                  >
                    <ViewBlog />
                  </HelmetWrapper>
                );
              }}
            />
            <Route path="/privacy" exact component={Privacy}></Route>
            <Route path="/adminjobs" exact component={AdminJobs}></Route>
            <Route path="/adminblogs" exact component={AdminBlogs}></Route>
          </Switch>
        </Navigation>
      </Router>
    </HelmetWrapper>
    </ThemeProvider>
  );
}
