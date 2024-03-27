import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";
import { useAtom } from "jotai";
import { colorModeAtom } from "../globalstates/colorMode";
import Development from "./Development";
import { Progress } from "./Progress";
import Top from "./Top";

export default function Main() {
  const [mode, setMode] = useAtom(colorModeAtom);
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
              onChangeMode={() => setMode(mode === "light" ? "dark" : "light")}
              onChangePageMode={(mode) => setPageMode(mode)}
            />
          )}
          {pageMode === "client" && (
            <Top
              mode={mode}
              onChangeMode={() => setMode(mode === "light" ? "dark" : "light")}
              onChangePageMode={(mode) => setPageMode(mode)}
            />
          )}
        </Box>
      </Fade>
    </Box>
  );
}
