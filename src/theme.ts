import { createTheme as createBase, PaletteMode, Theme } from "@mui/material";

export const createTheme = (mode?: PaletteMode): Theme => {
  if (mode === "dark") {
    return darkTheme;
  }
  return lightTheme;
};

const lightTheme = createBase({
  palette: {
    mode: "light",
    background: {
      default: "#fcfcfc",
    },
    primary: {
      main: "#e2345a",
    },
    secondary: {
      main: "#f6bd60",
    },
    text: {
      primary: "#452F27",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
  // typography: {
  //   fontFamily: [
  //     "Kosugi Maru",
  //     '"Noto Sans JP"',
  //     '"Helvetica"',
  //     "Arial",
  //     "sans-serif",
  //   ].join(","),
  // },
});

const darkTheme = createBase({
  palette: {
    mode: "dark",
    background: {
      default: "#003049",
    },
    primary: {
      main: "#e76f51",
    },
    secondary: {
      main: "#f6bd60",
    },
    text: {
      primary: "#ccc5b9",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#324e65",
        },
      },
    },
  },
  // typography: {
  //   fontFamily: [
  //     "Kosugi Maru",
  //     '"Noto Sans JP"',
  //     '"Helvetica"',
  //     "Arial",
  //     "sans-serif",
  //   ].join(","),
  // },
});
