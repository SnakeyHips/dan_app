import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const Theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5990F2"
    },
    secondary: {
      main: fade("#5990F2", 0.1)
    },
    background: {
      default: "#1F1B22",
      paper: "#27262E"
    },
    text: {
      primary: grey[50]
    },
    type: "dark"
  },
  typography: {
    fontFamily: "Public Sans, sans-serif"
  }
});

export default Theme;
