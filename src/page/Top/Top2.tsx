import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  AppBar,
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { getInformation } from "api";
import heroImage from "assets/back.png";
import me from "assets/me.png";

export default function Top() {
  const { t } = useTranslation();

  useEffect(() => {
    try {
      getInformation();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(0 0 0 / .5)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="span" margin="auto">
            {t("title")}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 180, position: "relative" }}>
        <Avatar
          alt="ごましおきなこ"
          src={me}
          sx={{
            width: 148,
            height: 148,
            left: "1rem",
            top: "7.5rem",
            position: "absolute",
          }}
        />
        <img
          src={heroImage}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </div>
      <Grid container>
        <Grid item xs={6} md={3} />
        <Grid item xs={6} md={9} sx={{ pt: 2 }}>
          <Typography component="span" variant="h5">
            {t("author_info.ごましおきなこ")}
          </Typography>
          <Typography component="span" variant="body1">
            ({t("author_info.佐直茉純")})
          </Typography>
        </Grid>
        <Grid item xs={12} m={2} mt={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography component="div" variant="h6">
                {t("subtitle.about_author")}
              </Typography>
              <Typography component="div" variant="body1" mt={2}>
                {t("author_info.ごましおきなこ")}
              </Typography>
              <Typography component="div" variant="body2" mt={1}>
                <Trans t={t}>author</Trans>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Container></Container>
    </div>
  );
}
