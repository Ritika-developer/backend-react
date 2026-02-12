import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // black
    },
    secondary: {
      main: "#c9a24d", // gold
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
