import { Rating as Base, Typography } from "@mui/material";

export default function Rating({
  legend,
  value,
}: {
  legend: string;
  value: number;
}) {
  return (
    <div>
      <Typography component="legend">{legend}</Typography>
      <Base name={legend} value={value} readOnly />
    </div>
  );
}
