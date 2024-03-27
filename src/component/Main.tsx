import {
  Typography,
  Grid,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { ModeSwitch } from "./ModeSwitch";
import Wip from "./Wip";

interface Props {
  mode: "light" | "dark";
  onChangeMode: () => void;
  onChangePageMode: (mode: "client" | "dev") => void;
}

function Main({ mode, onChangeMode, onChangePageMode }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ px: 3, pb: 16 }}>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="row"
      >
        <Grid item xs={12} textAlign="center">
          <Box>
            <Typography
              variant="h3"
              color="primary"
              component="span"
              sx={{ fontFamily: "Monomaniac One", textAlign: "center" }}
            >
              ごましおきなこの{isMobile && <br />}ポートフォリオ
            </Typography>
            <Typography variant="caption" component="span" ml={0.5}>
              {import.meta.env.VITE_APP_VERSION}
            </Typography>
          </Box>
          {!isMobile && (
            <ModeSwitch
              sx={{ position: "absolute", right: 16, top: 16 }}
              checked={mode === "dark"}
              onClick={onChangeMode}
            />
          )}
        </Grid>
        <Grid item container xs={12}>
          <Typography variant="h4">このサイトについて</Typography>
        </Grid>
        <Grid item container xs={12}>
          <Typography variant="body1">
            ごましおきなこの個人サイトです
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex">
          <Typography variant="h4">問い合わせ先</Typography>
          <Wip />
        </Grid>
        <Grid item xs={12} display="flex">
          <Typography variant="h4">経歴</Typography>
          <Wip />
        </Grid>
        <Grid item xs={12} display="flex">
          <Typography variant="h4">スキルセット</Typography>
          <Wip />
        </Grid>
        <Grid item xs={12} display="flex">
          <Typography variant="h4">更新履歴</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{
              width: "100%",
              height: "180px",
              overflowY: "scroll",
            }}
          >
            <Typography variant="body1" component="div">
              <ul>
                <li>2021/10/01: とりあえず公開しました</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="caption">
            Copyright © 2014 ごましおきなこ All Rights Reserved.
          </Typography>
          <br />
          <Typography
            variant="caption"
            sx={{ color: (theme) => theme.palette.background.default }}
            component="div"
            onClick={() => onChangePageMode("dev")}
          >
            開発者ページを表示する
          </Typography>
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <ModeSwitch checked={mode === "dark"} onClick={onChangeMode} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Main;
