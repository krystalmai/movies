import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  main: "#0d253f",
  light: "#194677",
  lighter: "#1c4e85",
  contrastText: "#fff",
};
const SECONDARY = {
  main: "#01b4e4",
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: "#eef8f1",
  light: "#cbe8d3",
  main: "#90cea1",
  darker: "#429558",
  contrastText: "#112A46",
};
const TEXT = {
  main: "#fff",
  light: "#888",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
      text: TEXT,
    },

    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
