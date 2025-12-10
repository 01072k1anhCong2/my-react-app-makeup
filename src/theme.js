import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000ff" 
    },
    background: {
      default: "#ffffffff",
      paper: "#000000ff"
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
