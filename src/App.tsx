import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import { colorAtom } from "globalstate/theme";
import "./i18n";
import { createTheme } from "./theme";
import Main from "component/Main";

export default function App() {
  const [mode] = useAtom(colorAtom);
  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}
