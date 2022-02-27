import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 56,
  sidebarWidth: 200,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Lato, sans-serif",
    secondary: "Lato, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#323232",
      light: "#323232",
      dark: "#091118",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#fd3c34",
      light: "#fd3c34",
      dark: "#1F1D2F",
    },
    tertiary: {
      main: "#2C9ED0",
    },
    text: {
      primary: "#0a0000",
      secondary: "#F26B2A",
      content: "#999",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Lato", "Arial", sans-serif`,
    body1: {
      fontWeight: 300,
    },
  },
})

export default theme
