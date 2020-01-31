import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkButton from "../Layout/LinkButton";
import homeimage from "../../assets/home.jpg";
import mainImg from "../../assets/dandog.jpg";
import avatar from "../../assets/dan.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      height: 200,
      width: 200,
      margin: "auto",
      marginBottom: theme.spacing(4)
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: -theme.spacing(1)
    },
    divider: {
      margin: theme.spacing(4)
    },
    expansionSummary: {
      fontWeight: 700,
      margin: 0
    },
    fillHeight: {
      height: "100%"
    }
  })
);

export default function Home() {
  const classes = useStyles({});
  const classesBase = useStylesBase({});
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const aboutImg = <img className={classesBase.homeLogo} src={mainImg} alt="" />;

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={homeimage} className={classesBase.headerImage} alt="" />
          <span className={classesBase.headerText}>Dan Gough</span>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={classesBase.contentTitle}>Who I am</h4>
          </Grid>
          {smAndDown && (
            <Grid item sm={10} xs={12} className={clsx(classesBase.mb3, classesBase.textCenter)}>
              {aboutImg}
            </Grid>
          )}
          <Grid item md={6} sm={10} xs={12}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </Grid>
          {!smAndDown && (
            <Grid item md={2} className={classesBase.ml2}>
              {aboutImg}
            </Grid>
          )}
          <Grid item md={8} sm={10} xs={12} className={clsx(classesBase.mt3, classesBase.mb3)}>
            <h4 className={clsx(classesBase.mt3, classesBase.mb3, classesBase.contentTitle)}>What I Do</h4>
            <ExpansionPanel elevation={0} defaultExpanded={true} className={classesBase.mb3}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p className={classes.expansionSummary}>Images</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.{" "}
                      <a href="mailto:Gough.Dan@hotmail.com">Gough.Dan@hotmail.com.</a>
                    </p>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.button} to="/images">
                      Images
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} className={classesBase.mb3}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p className={classes.expansionSummary}>Videos</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                      ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                      ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?{" "}
                      <a href="mailto:Gough.Dan@hotmail.com">Gough.Dan@hotmail.com.</a>
                    </p>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.button} to="/videos">
                      Videos
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item sm={10} xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item md={4} sm={10} xs={12} className={clsx(classesBase.mt3, classesBase.mb3, classesBase.textCenter)}>
            <Avatar src={avatar} alt="" className={classes.avatar} />
            <h6>DAN GOUGH</h6>
            <h6>Give me money</h6>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid container justify="center" alignItems="center" className={classes.fillHeight}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Grid>
          </Grid>
          <Grid item md={4} sm={10} xs={12} className={classesBase.mb3}>
            <Grid container justify="center" alignItems="center" className={classes.fillHeight}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Location" secondary="Edinburgh, Scotland" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary="Gough.Dan@hotmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Telephone" secondary="+447958350303" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
