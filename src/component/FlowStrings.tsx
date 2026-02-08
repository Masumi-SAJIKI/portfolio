import { keyframes } from "@emotion/react";
import { styled } from "@mui/material";

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Wrapper = styled("div")`
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled("span")`
  display: inline-block;
  animation: ${marquee} 3s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default function FlowStrings({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}
