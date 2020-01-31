import React, { useState, MouseEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkButton from "../Layout/LinkButton";
import facebooklogo from "../../assets/facebook.svg";
import instagramlogo from "../../assets/instagram.svg";
import linkedinlogo from "../../assets/linkedin.svg";
import twitterlogo from "../../assets/twitter.svg";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "none"
    },
    logo: {
      marginRight: theme.spacing(3)
    },
    menuImage: {
      margin: "auto"
    },
    moreButton: {
      marginRight: -22
    }
  })
);

export default function TopAppBar() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(undefined);
  const facebook: string = "https://facebook.com";
  const twitter: string = "https://twitter.com";
  const linkedIn: string = "https://linkedin.com";
  const instagram: string = "https://instagram.com";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(undefined);
  }

  function handleSocialClick(url: string) {
    window.open(url);
  }

  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const topAppBar = smAndDown ? (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <h6 className={classesBase.primaryText}>Dan Gough</h6>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton className={classes.moreButton} color="primary" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => handleSocialClick(facebook)}>
                  <img className={classes.menuImage} src={facebooklogo} height="24" alt="facebooklogo" />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(twitter)}>
                  <img className={classes.menuImage} src={twitterlogo} height="24" alt="twitterlogo" />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(linkedIn)}>
                  <img className={classes.menuImage} src={linkedinlogo} height="24" alt="linkedinlogo" />
                </MenuItem>
                <MenuItem onClick={() => handleSocialClick(instagram)}>
                  <img className={classes.menuImage} src={instagramlogo} height="24" alt="instagramlogo" />
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center">
              <h6 className={classesBase.primaryText}>Dan Gough</h6>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="center" wrap="nowrap">
              <LinkButton className={classesBase.button} to="/">
                Home
              </LinkButton>
              <LinkButton className={classesBase.button} to="/images">
                Images
              </LinkButton>
              <LinkButton className={classesBase.button} to="/videos">
                Videos
              </LinkButton>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton color="primary" onClick={() => handleSocialClick(facebook)}>
                <img src={facebooklogo} height="24" alt="facebooklogo" />
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(twitter)}>
                <img src={twitterlogo} height="24" alt="twitterlogo" />
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(linkedIn)}>
                <img src={linkedinlogo} height="24" alt="linkedinlogo" />
              </IconButton>
              <IconButton color="primary" onClick={() => handleSocialClick(instagram)}>
                <img src={instagramlogo} height="24" alt="instagramlogo" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return <div>{topAppBar}</div>;
}
