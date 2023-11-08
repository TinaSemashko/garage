import Topbar from "../shared/topbar/topbar";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Footer from "../shared/footer/footer";
import { AppRoutes } from "./appRoutes";

declare module "@mui/material/styles" {
  interface Palette {
    colorWhite: Palette["primary"];
    colorShadow: Palette["primary"];
    colorDisabled: Palette["primary"];
  }

  interface PaletteOptions {
    colorWhite?: PaletteOptions["primary"];
    colorShadow?: PaletteOptions["primary"];
    colorDisabled?: PaletteOptions["primary"];
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#a90b0b",
    },
    secondary: {
      main: "#414040",
    },
    colorWhite: {
      main: "#ffffff",
    },
    colorDisabled: {
      main: "rgba(150, 149, 149, 0.9)",
    },
    colorShadow: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Metal Mania, serif",
      // fontSize: "15rem",
    },
    h2: {
      fontFamily: "Architects Daughter, serif",
      // fontSize: "8rem",
    },
    h3: {
      fontFamily: "Special Elite, cursive",
    },
    h4: {
      fontFamily: "Special Elite, cursive",
      "@media (max-width:750px)": {
        fontSize: "0.7rem",
      },
    },
    h5: {
      fontFamily: "Special Elite, cursive",
      // fontSize: "4rem",
    },
    body1: {
      fontFamily: "Special Elite, sans-serif",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
  },
});
theme = responsiveFontSizes(theme);

const App: React.FC = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Topbar />
    <SnackbarProvider>
      <AppRoutes />
    </SnackbarProvider>
    <Footer />
  </ThemeProvider>
);

export default App;
