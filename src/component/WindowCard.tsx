import { ReactNode } from "react";
import { Box, Card, Palette, PaletteColor } from "@mui/material";

type Props = {
  children: ReactNode;
  width?: string;
  height?: string;
  color?: keyof Palette;
};

export default function SkillCard({
  children,
  width = "300px",
  height,
  color = "secondary",
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width,
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          position: "absolute",
          width: "10px",
          height: "10px",
          color: "#452F27",
          top: "-3px",
          right: "7px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        ×
      </Box>
      <Box
        sx={{
          zIndex: 1,
          position: "absolute",
          width: "10px",
          height: "10px",
          border: "2px solid",
          borderColor: "#452F27",
          top: "5px",
          right: "20px",
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          position: "absolute",
          width: "10px",
          height: "10px",
          color: "#452F27",
          top: "-6px",
          right: "32px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        _
      </Box>
      <Card
        sx={{
          border: "3px solid",
          borderTop: "18px solid",
          borderColor: (theme) => (theme.palette[color] as PaletteColor).light,
          height: height && height.length > 0 ? height : "auto",
          overflowY: height && height.length > 0 ? "scroll" : "auto",
          p: 0,
        }}
        elevation={0}
      >
        {children}
      </Card>
    </Box>
  );
}
