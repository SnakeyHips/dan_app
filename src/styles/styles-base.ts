import { createStyles, Theme, makeStyles, fade } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "Public Sans, sans-serif",
      display: "flex",
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "unset",
      },
      "& p": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      "& li": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      "& h6": {
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
        marginTop: 8,
        marginBottom: 8
      },
      "& .MuiButton-root": {
        fontWeight: 700
      },
      "& .MuiExpansionPanel-root:before": {
        backgroundColor: "unset !important"
      }
    },
    primaryText: {
      color: theme.palette.primary.main
    },
    dialog: {
      "& .MuiPaper-elevation24": {
        boxShadow: "none !important"
      }
    },
    searchTextField: {
      "& .MuiFilledInput-root": {
        backgroundColor: theme.palette.background.paper
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: fade(theme.palette.background.paper, 0.9)
      }
    },
    paper: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(4)
    },
    viewPaper: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(3)
    },
    textCenter: {
      textAlign: "center"
    },
    textField: {
      marginBottom: `${theme.spacing(4)}px !important`,
      "& .MuiFilledInput-root": {
        borderRadius: "4px !important"
      },
      "& .MuiFilledInput-underline:before ": {
        borderBottom: "none !important"
      },
      "& .MuiFilledInput-underline:after": {
        marginRight: "2px !important",
        marginLeft: "2px !important",
        borderRadius: "4px !important"
      }
    },
    mt3: {
      marginTop: theme.spacing(3)
    },
    mt6: {
      marginTop: theme.spacing(6)
    },
    mb2: {
      marginBottom: theme.spacing(2)
    },
    mb3: {
      marginBottom: theme.spacing(3)
    },
    mb6: {
      marginBottom: theme.spacing(6)
    },
    ml2: {
      marginLeft: theme.spacing(2)
    },
    fullHeight: {
      height: "100vh"
    },
    recLogo: {
      display: "flex",
      height: 100,
      margin: "auto"
    },
    shortContentDom: {
      maxHeight: 600,
      overflowY: "hidden",
      textOverflow: "ellipsis"
    },
    contentDom: {
      wordBreak: "break-word",
      "& img": {
        display: "flex",
        margin: "auto",
        height: "unset",
        width: "unset",
        maxWidth: "100%"
      }
    },
    boldText: {
      fontWeight: 700
    },
    button: {
      margin: theme.spacing(1)
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    grid: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    contentContainer: {
      padding: theme.spacing(7),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    },
    headerImage: {
      height: "100vh",
      width: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        height: `calc(100vh - ${theme.spacing(7)})`
      }
    },
    headerText: {
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: theme.spacing(4),
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: "3.5rem",
      letterSpacing: "0.00938em",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
        marginBottom: theme.spacing(7)
      }
    },
    homeLogo: {
      maxHeight: 220,
      [theme.breakpoints.down("md")]: {
        maxHeight: 180
      },
      [theme.breakpoints.down("sm")]: {
        maxHeight: 120
      }
    },
    contentTitle: {
      fontSize: "2.125rem",
      fontWeight: 700,
      lineHeight: 1.17,
      letterSpacing: "0.00735em",
      marginTop: 8,
      marginBottom: 8,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: 1.33,
        letterSpacing: 0,
        textAlign: "center"
      }
    }
  })
);

export default useStylesBase;
