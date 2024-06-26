import { Box, CircularProgress, Typography } from "@mui/material";

function Wip() {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", ml: 1.5 }}>
      <CircularProgress size="2.8rem" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption">WIP</Typography>
      </Box>
    </Box>
  );
}

export default Wip;
