import { useEffect, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ModeSwitch from "component/ModeSwitch";
import Rating from "component/Rating";
import SkillCard from "component/SkillCard";
import Main from "component/Top";
import WindowCard from "component/WindowCard";

interface Props {
  mode: "light" | "dark";
  onChangeMode: () => void;
  onChangePageMode: (mode: "client" | "dev") => void;
}

function Development({ mode, onChangeMode, onChangePageMode }: Props) {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <Box>
      <Container sx={{ px: 3, pb: 16 }}>
        <Box
          sx={{
            width: "200px",
            padding: "3px 10px",
            background: "#d43131",
            color: "#fff",
            textAlign: "center",
            display: "inline-block",
            position: "fixed",
            top: "43px",
            left: "-48px",
            textTransform: "uppercase",
            transform: "rotate(315deg)",
          }}
        >
          開発者ページ
        </Box>
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
                ごましおきなこの{isMobile && <br />}ポートフォリオ(dev)
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
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ textAlign: "right" }}>
                アクセスカウンター
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Typography component="span" variant="body1">
                  トータル:
                </Typography>
                <Typography component="span" variant="body1">
                  {counter}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography component="span" variant="body1">
                  今日:
                </Typography>
                <Typography component="span" variant="body1">
                  {counter}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <WindowCard width="100%">
              <Grid item container xs={12}>
                <Typography variant="h4">このページについて</Typography>
              </Grid>
              <Grid item container xs={12}>
                <Typography variant="body1">
                  色々試してみたいことを試すページです
                </Typography>
              </Grid>
            </WindowCard>
          </Grid>
          <Grid item container xs={12}>
            <Typography variant="h4">このページについて</Typography>
          </Grid>
          <Grid item container xs={12}>
            <Typography variant="body1">
              色々試してみたいことを試すページです
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">タイトル</Typography>
              <WindowCard>
                <SkillCard
                  title="プログラミング言語"
                  icon={<LanguageIcon />}
                  skills={[
                    { name: "React", rating: 3 },
                    { name: "React", rating: 3 },
                    { name: "React", rating: 3 },
                    { name: "React", rating: 3 },
                    { name: "React", rating: 3 },
                  ]}
                />
              </WindowCard>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs="auto">
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.dark,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.light,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.light,
                }}
                width="50px"
                height="50px"
              >
                <Typography variant="h6">あ</Typography>
              </Box>
            </Grid>
            <Typography variant="body1" component="span" color="primary">
              ごましおきなこ
            </Typography>
            <Typography variant="body1" component="span" color="secondary">
              ごましおきなこ
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Monomaniac One", textAlign: "center" }}
              color="primary"
            >
              ごましおきなこ
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Monomaniac One", textAlign: "center" }}
              color="secondary"
            >
              ごましおきなこ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">スキルセット</Typography>
            <Rating legend="React" value={3} />
            <Rating legend="PHP" value={3} />
            <Rating legend="Laravel" value={3} />
            <Rating legend="Java" value={1} />
            <Rating legend="Kotlin" value={1} />
            <Rating legend="Spring Framework" value={1} />
            <Rating legend="Flutter" value={1} />
            <Rating legend="Javascript" value={3} />
            <Rating legend="TypesScript" value={3} />
            <Rating legend="AWS" value={1} />
            <Rating legend="Nginx" value={1} />
            <Rating legend="Excel" value={3} />
            <Rating legend="Word" value={3} />
            <Rating legend="PowerPoint" value={3} />
            <Rating legend="AdobeXD" value={1} />
            <Rating legend="Firebase" value={1} />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="caption">
              Copyright © 2014 ごましおきなこ All Rights Reserved.
            </Typography>
            <br />
            <Typography
              variant="caption"
              component="div"
              onClick={() => onChangePageMode("client")}
            >
              クライアントページに戻る
            </Typography>
          </Grid>
          {isMobile && (
            <Grid item xs={12}>
              <ModeSwitch checked={mode === "dark"} onClick={onChangeMode} />
            </Grid>
          )}
        </Grid>
      </Container>
      <Grid item xs={12} textAlign="center" mt={2}>
        <Typography variant="h4">ページプレビュー</Typography>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Main
        mode={mode}
        onChangeMode={onChangeMode}
        onChangePageMode={onChangePageMode}
      />
    </Box>
  );
}

export default Development;
