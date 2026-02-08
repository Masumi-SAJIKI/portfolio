import { useEffect, useState } from "react";
import { Box, Container, Fade, styled } from "@mui/material";
import background from "assets/background.jpg";
import Top from "page/Top/Top3";
import { Progress } from "component/Progress";
import QRCodeGenerator from "component/QRCodeGenerator";
import { useAtom } from "jotai";
import { colorAtom } from "globalstate/theme";

const DesktopBackground = styled("div")({
  backgroundImage: `url(${background})`,
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  overflow: "scroll",
});

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  backgroundPosition: "left",
  [theme.breakpoints.up("xs")]: {
    padding: 0,
  },
}));

export default function Main() {
  const [mode, setMode] = useAtom(colorAtom);
  const [isDev] = useState(false);
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
      <Top />
      {/* <DesktopBackground>
        <StyledContainer maxWidth="md">
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
                  onChangeMode={() =>
                    setMode(mode === "light" ? "dark" : "light")
                  }
                  onChangeDev={() => {}}
                />
              </Box>
            </Fade>
            {isDev && <QRCodeGenerator />}
          </Box>
        </StyledContainer>
      </DesktopBackground> */}
    </Box>
  );
}
