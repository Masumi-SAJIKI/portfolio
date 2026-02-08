import { Box } from "@mui/material";
import React from "react";

export default function TableRow({
  cols,
  children,
}: {
  cols?: number;
  children?: React.ReactNode;
}) {
  const columns = React.Children.count(children);
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols ? cols : columns}, 1fr)`,
        gap: "2px",
        paddingBottom: "1px",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
