import { useEffect, useMemo, useRef } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import { postCounter } from "api";
import { colorAtom } from "globalstate/theme";
import Main from "page/Top/Main";
import "./i18n";
import { createTheme } from "./theme";

export default function App() {
  const [mode] = useAtom(colorAtom);
  const theme = useMemo(() => createTheme(mode), [mode]);
  const accessRef = useRef(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (!accessRef.current) {
        if (process.env.NODE_ENV === "production") {
          postCounter();
        }
      }
      accessRef.current = true;
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}
