import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63" // hồng makeup
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e"
    },
    text: {
      primary: "#f1f1f1"
    }
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
