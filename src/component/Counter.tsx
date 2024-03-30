import { Typography, useTheme } from "@mui/material";

type Props = {
  count: number;
};

export default function Counter({ count }: Props) {
  const theme = useTheme();
  const color = (num: string) => {
    switch (num) {
      case "0":
        return theme.palette.primary.light;
      case "1":
        return theme.palette.primary.main;
      case "2":
        return theme.palette.success.light;
      case "3":
        return theme.palette.secondary.main;
      case "4":
        return theme.palette.error.main;
      case "5":
        return theme.palette.success.main;
      case "6":
        return theme.palette.info.main;
      case "7":
        return theme.palette.error.light;
      case "8":
        return theme.palette.info.light;
      case "9":
        return theme.palette.warning.main;
      default:
        return theme.palette.text.primary;
    }
  };
  return (
    <>
      {Array.from(count.toFixed(0).padStart(6, "0")).map((n, index) => (
        <Typography
          component="span"
          variant="h4"
          key={`${index}_${n}`}
          sx={{
            fontFamily: "Josefin Sans",
            fontWeight: "700",
            color: color(n).toString(),
          }}
        >
          {n}
        </Typography>
      ))}
    </>
  );
}
