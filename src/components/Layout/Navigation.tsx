import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles({
  content: {
    flexGrow: 1
  }
});

interface NavigationProps {
  children: JSX.Element;
}

export default function Navigation(props: NavigationProps) {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const { children } = props;
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classesBase.root}>
      <TopAppBar />
      <main className={classes.content}>{children}</main>
      {bottomNav}
    </div>
  );
}
