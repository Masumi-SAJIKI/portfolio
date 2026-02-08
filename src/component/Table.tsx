import { Box } from "@mui/material";

export default function Table({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <Box
      style={{
        display: "grid",
        gap: "1px",
        background: "#fff",
        border: "1px solid grey",
        padding: "2px",
        margin: "auto",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
