import { Trans, useTranslation } from "react-i18next";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "assets/github-mark.svg";
import me from "assets/me.png";
import History from "component/History";

export default function Author() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item container mb={4}>
      <Grid item xs={12} sm={2} textAlign="center">
        <img
          src={me}
          style={{
            width: isMobile ? "80%" : "200px",
            borderRadius: "2%",
          }}
        />
        <Grid item container mt={1}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Avatar sx={{ mr: 0.5 }}>
                <Tooltip arrow title="@kinakoGomashio">
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://twitter.com/kinakoGomashio",
                        "_blank"
                      )
                    }
                  >
                    <SvgIcon sx={{ width: "20px" }}>
                      <svg
                        width="1200"
                        height="1227"
                        viewBox="0 0 1200 1227"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                          fill="white"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Avatar>
              <Avatar sx={{ bgcolor: "white", ml: 0.5 }}>
                <Tooltip arrow title="@Masumi-SAJIKI">
                  <IconButton
                    onClick={() =>
                      window.open("https://github.com/Masumi-SAJIKI", "_blank")
                    }
                  >
                    <img src={GitHubIcon} style={{ width: 28 }} />
                  </IconButton>
                </Tooltip>
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid item xs={12} sm={4}>
          <History />
        </Grid>
      )}
      <Grid item xs={12} sm={6} mt={isMobile ? 3 : 0}>
        <Typography variant="body1" component="div" ml={2}>
          <Trans i18nKey="author" />
        </Typography>
      </Grid>
      {isMobile && (
        <Grid item xs={12} sm={4} mt={3}>
          <History />
        </Grid>
      )}
    </Grid>
  );
}
