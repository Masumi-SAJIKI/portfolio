import { Box } from "@mui/material";

export default function TableCell({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <Box
      style={{
        background: "#fff",
        borderTop: "1px solid #000",
        borderLeft: "1px solid #000",
        borderRight: "1px solid grey",
        borderBottom: "1px solid grey",
        padding: "4px 8px",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
