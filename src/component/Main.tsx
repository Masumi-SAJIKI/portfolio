import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";
import { useAtom } from "jotai";
import { colorAtom } from "globalstate/theme";
import { Progress } from "component/Progress";
import Top from "component/Top";

export default function Main() {
  const [mode, setMode] = useAtom(colorAtom);
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
    <Box>
      {!show && (
        <Box>
          <Progress value={progress} variant="determinate" />
        </Box>
      )}
      <Fade in={show}>
        <Box>
          <Top
            mode={mode}
            onChangeMode={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </Box>
      </Fade>
    </Box>
  );
}
