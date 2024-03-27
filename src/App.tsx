import { useEffect, useState } from "react";
import { Fade, Box, ThemeProvider, CssBaseline } from "@mui/material";
import { Progress } from "./component/Progress";
import Main from "./component/Main";
import { theme } from "./theme";
import Development from "./component/Development";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [pageMode, setPageMode] = useState<"client" | "dev">("client");
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setShow(true);
        }
        const diff = Math.random() * 100;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Box minHeight="100vh">
        {!show && (
          <Box maxHeight="100vh" overflow="hidden">
            <Progress value={progress} variant="determinate" />
          </Box>
        )}
        <Fade in={show}>
          <Box minHeight="100vh">
            {pageMode === "dev" && (
              <Development
                mode={mode}
                onChangeMode={() =>
                  setMode(mode === "light" ? "dark" : "light")
                }
                onChangePageMode={(mode) => setPageMode(mode)}
              />
            )}
            {pageMode === "client" && (
              <Main
                mode={mode}
                onChangeMode={() =>
                  setMode(mode === "light" ? "dark" : "light")
                }
                onChangePageMode={(mode) => setPageMode(mode)}
              />
            )}
          </Box>
        </Fade>
      </Box>
    </ThemeProvider>
  );
}
