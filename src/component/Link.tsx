import { Box } from "@mui/material";

export default function Link({
  image,
  title,
  style,
  onClick,
}: {
  title: string;
  image?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}) {
  return (
    <Box mb={2} style={style}>
      {image && <img src={image} width={16} style={{ marginRight: 8 }} />}
      <span
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "blue",
        }}
        onClick={onClick}
      >
        {title}
      </span>
    </Box>
  );
}
