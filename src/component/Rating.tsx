import { Box, Rating as Base, Typography } from "@mui/material";

export default function Rating({
  legend,
  value,
  description,
  width = "100px",
}: {
  legend: string;
  value: number;
  description?: string;
  width?: string;
}) {
  return (
    <Box display="flex" marginBlock={1} alignItems="center">
      <Typography component="legend" minWidth={width}>
        {legend}
      </Typography>
      <Base name={legend} value={value} readOnly size="small" max={3} />
      <Typography variant="caption" color="grey" ml={1}>
        {description}
      </Typography>
    </Box>
  );
}
