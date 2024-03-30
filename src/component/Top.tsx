import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import {
  Avatar,
  Box,
  CardContent,
  Container,
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
import { useCounter } from "hook/Counter";
import i18next from "i18next";
import Counter from "component/Counter";
import History from "component/History";
import ModeSwitch from "component/ModeSwitch";
import ReleaseNote from "component/ReleaseNote";
import Title from "component/Title";
import WindowCard from "component/WindowCard";

interface Props {
  mode: "light" | "dark";
  onChangeMode: () => void;
}

export default function Top({ mode, onChangeMode }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const count = useCounter();

  const handleChangeLang = useCallback(() => {
    i18next.changeLanguage(i18next.language === "ja" ? "en" : "ja");
  }, []);

  const verTopPosition = useMemo(() => {
    if (!isMobile) return 48;
    if (i18next.language === "ja") return 120;
    return 194;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, i18next.language]);
  const verLeftPosition = useMemo(() => {
    if (isMobile) return 250;
    if (i18next.language === "ja") return 500;
    return 678;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, i18next.language]);

  return (
    <Container sx={{ px: 3, pb: 16 }}>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="row"
      >
        <Grid item xs={12} textAlign="center" mt={3} mb={1}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              variant="h2"
              color="primary"
              component="div"
              sx={{ fontFamily: "Monomaniac One", textAlign: "center" }}
            >
              {t("title.author")}
              {isMobile && <br />}
              {i18next.language === "en" && " "}
              {t("title.portfolio")}
            </Typography>
            <Typography
              variant="caption"
              component="span"
              sx={{
                position: "absolute",
                top: verTopPosition,
                right: 0,
                left: verLeftPosition,
              }}
            >
              {import.meta.env.VITE_APP_VERSION}
            </Typography>
          </Box>
          {!isMobile && (
            <>
              <Tooltip
                title={t("button.change_lang")}
                sx={{ position: "absolute", right: 80, top: 14 }}
              >
                <IconButton onClick={handleChangeLang}>
                  <GTranslateIcon />
                </IconButton>
              </Tooltip>
              <ModeSwitch
                sx={{ position: "absolute", right: 16, top: 16 }}
                checked={mode === "dark"}
                onClick={onChangeMode}
              />
            </>
          )}
        </Grid>
        <Grid item xs={12} textAlign="center" mt={2} mb={3}>
          <Typography variant="body1" component="div">
            とりあえずReactを書きたかったので作りました。
          </Typography>
        </Grid>
        <Title title={t("subtitle.about_author")} />
        <Grid item container spacing={2} mb={4}>
          <Grid item xs={12} sm="auto" textAlign="center">
            <img
              src={me}
              style={{
                width: isMobile ? "80%" : "200px",
                borderRadius: "2%",
              }}
            />
            <Grid item container mt={1}>
              <Grid item xs={3} />
              <Grid item xs={3}>
                <Avatar>
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
              </Grid>
              <Grid item xs={3}>
                <Avatar sx={{ bgcolor: "white" }}>
                  <Tooltip arrow title="@Masumi-SAJIKI">
                    <IconButton
                      onClick={() =>
                        window.open(
                          "https://github.com/Masumi-SAJIKI",
                          "_blank"
                        )
                      }
                    >
                      <img src={GitHubIcon} style={{ width: 28 }} />
                    </IconButton>
                  </Tooltip>
                </Avatar>
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1" component="div" ml={2}>
              ごましおきなこ
              <br />
            </Typography>
            {!isMobile && <History />}
          </Grid>
          {isMobile && (
            <Grid item xs={12}>
              <History />
            </Grid>
          )}
        </Grid>
        <Title title={t("subtitle.skill")} />
        <Grid item container spacing={1} mb={4}>
          <Grid item xs={12} sm={4}>
            <WindowCard width="100%" color="secondary">
              <Box p={5} textAlign="center">
                工事中...
              </Box>
            </WindowCard>
          </Grid>
        </Grid>
        <Title title={t("subtitle.release")} />
        <Grid item xs={12} mb={4}>
          <WindowCard height="120px" width="100%">
            <CardContent>
              <ReleaseNote
                notes={[
                  {
                    ver: "0.4.0",
                    date: new Date("2024-03-30"),
                    note: "アクセスカウンターを追加しました。FirebaseのonSnapshotを使ってリアルタイムで更新してみました。",
                  },
                  {
                    ver: "0.3.0",
                    date: new Date("2024-03-28"),
                    note: "全体的に書き換えました。多言語対応を追加。",
                  },
                  {
                    ver: "0.2.0",
                    date: new Date("2024-03-27"),
                    note: "とりあえずひっそりと公開しました。",
                  },
                ]}
              />
            </CardContent>
          </WindowCard>
        </Grid>
        {isMobile && (
          <>
            <Grid item xs={12} textAlign="right" mt={2}>
              <Tooltip title={t("button.change_lang")}>
                <IconButton onClick={handleChangeLang}>
                  <GTranslateIcon />
                </IconButton>
              </Tooltip>
              <ModeSwitch checked={mode === "dark"} onClick={onChangeMode} />
            </Grid>
          </>
        )}
        <Grid item xs={12} textAlign="center" mt={1}>
          <Typography variant="caption" component="div">
            アクセスカウンター
          </Typography>
          <Counter count={count} />
          <Typography variant="caption" component="div" color="GrayText">
            リアルタイムでカウントしています。
            {/* <br />
            キリ番を踏んだらBBSにぜひ記念書き込みお願いします！ */}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" mt={3}>
          <Typography variant="caption">
            Copyright © 2014 ごましおきなこ All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
