import { keyframes } from "@emotion/react";
import { styled } from "@mui/material";

const blink = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;

const Base = styled("span")`
  animation: ${blink} 1s step-end infinite;
`;

export default function BlinkingText({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Base>{children}</Base>;
}
