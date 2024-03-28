import { Box, Grid, Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <Grid item xs={12} mt={4} mb={3}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "&::after": {
            borderTop: "solid 1px",
            content: '""',
            borderColor: (theme) => theme.palette.primary.main,
            flexGrow: 1,
            ml: 2,
          },
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Grid>
  );
}
