import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import Main from "./component/Main";
import { colorModeAtom } from "./globalstates/colorMode";
import { createTheme } from "./theme";

export default function App() {
  const [mode] = useAtom(colorModeAtom);
  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}
