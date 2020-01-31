import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "Public Sans, sans-serif",
      display: "flex",
      height: "100vh",
      width: "100vw",
      whiteSpace: "pre-line",
      overflow: "hidden"
    },
    overrides: {
      "& a": {
        textDecoration: "unset",
        wordBreak: "break-word",
        cursor: "pointer"
      },
      "& p": {
        fontSize: 16,
        lineHeight: 1.88,
        letterSpacing: 0.2,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      },
      "& span": {
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: 0.44
      },
      "& h6": {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 1.5,
        letterSpacing: 0.24,
        margin: 0
      },
      "& .MuiPaper-elevation1": {
        boxShadow:
          theme.palette.type === "light" ? "0 2px 0 0 rgba(195, 209, 222, 0.65)" : "0 3px 0 0 rgba(0, 0, 0, 0.21)",
        transition: "unset"
      },
      "& .MuiListItem-button:hover": {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 4
      },
      "& .MuiInput-underline:before": {
        borderBottom: 0
      },
      "& .MuiInput-underline:after": {
        borderBottom: 0
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: 0
      },
      "& .MuiSkeleton-root": {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 4
      },
      "-ms-scrollbar-track-color": theme.palette.background.default,
      "-ms-scrollbar-shadow-color": theme.palette.background.default,
      "-ms-scrollbar-face-color": theme.palette.type === "dark" ? "#2C4879" : "#A2C3F3",
      "-ms-scrollbar-arrow-color": theme.palette.type === "dark" ? "#2C4879" : "#A2C3F3",
      "@global": {
        "*::-webkit-scrollbar": {
          width: 6,
          height: 6
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.secondary.main
        },
        "*::-webkit-scrollbar-corner": {
          background: "transparent"
        }
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
    whiteTextField: {
      "& .MuiFilledInput-root": {
        backgroundColor: "white !important"
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: "rgba(34, 183, 113, 0.09) !important"
      }
    },
    adminPaper: {
      width: "100%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    stemPaper: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(4)
    },
    viewPaper: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(3)
    },
    select: {
      marginBottom: `${theme.spacing(3)}px !important`,
      "& .MuiFilledInput-root": {
        borderRadius: "4px !important",
        backgroundColor: "rgba(0, 0, 0, 0.09) !important"
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
      fontWeight: 500
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
      color: "#FCFCFC",
      fontSize: "3.5rem",
      fontWeight: 500,
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
      fontWeight: 500,
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