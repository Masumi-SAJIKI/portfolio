import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import archive_1 from "assets/archive_1.png";
import archive_1_mobile from "assets/archive_1_mobile.png";

export default function Archives() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mx={1} mt={2} textAlign="center">
      <Box mb={2}>
        <Typography component="span" mr={1} fontSize="36px" fontWeight="bold">
          ホームページ{isMobile && <br />}アーカイブ
        </Typography>
      </Box>
      <Box>過去のホームページデザインを掲載しています</Box>
      <Box mb={2} mt={3}>
        2024/3/27 - 2026/2/8
        <br />
        <img src={archive_1} width={isMobile ? "100%" : 800} />
        <br />
        <img src={archive_1_mobile} width={isMobile ? "100%" : 200} />
      </Box>
    </Box>
  );
}
