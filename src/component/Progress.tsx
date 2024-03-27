import { LinearProgress, styled } from "@mui/material";

export const Progress = styled(LinearProgress)(() => ({
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  margin: "auto",
  width: "50%",
}));
