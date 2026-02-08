import { Box, Typography } from "@mui/material";
import { useCounter } from "hook/Counter";

type Props = {
  isMobile: boolean;
};

export default function PageTitle({ isMobile }: Props) {
  const count = useCounter();
  return (
    <>
      <Box textAlign="center" mb={2}>
        <Typography
          textAlign="center"
          component="span"
          mr={1}
          fontSize="36px"
          fontWeight="bold"
        >
          ごましおきなこの
          {isMobile && <br />}
          ホームページ
        </Typography>
        {isMobile && <br />}
        <Typography variant="caption" component="span">
          v{import.meta.env.VITE_APP_VERSION}
        </Typography>
      </Box>
      <Box textAlign="center">
        あなたは
        <span style={{ color: "red", fontWeight: "bold", margin: "0 4px" }}>
          {count}
        </span>
        人目の訪問者です！
      </Box>
    </>
  );
}
