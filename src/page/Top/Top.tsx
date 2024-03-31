import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns/format";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SchoolIcon from "@mui/icons-material/School";
import {
  Avatar,
  Box,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import GitHubIcon from "assets/github-mark.svg";
import me from "assets/me.png";
import { useCounter } from "hook/Counter";
import i18next from "i18next";
import Counter from "component/Counter";
import History from "component/History";
import LanguageChangeButton from "component/LanguageChangeButton";
import StyledCardContents from "component/ListCard";
import ModeSwitch from "component/ModeSwitch";
import ReleaseNote from "component/ReleaseNote";
import SkillCard from "component/SkillCard";
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

  const usedLanguages = [
    { id: 0, value: 27, label: "React(TS)" },
    { id: 1, value: 15, label: "PHP/Laravel" },
    { id: 2, value: 10, label: "Java/SpringFW" },
    { id: 3, value: 12, label: "Kotlin/SpringFW" },
    { id: 4, value: 2, label: "C#" },
  ];
  const sum = usedLanguages
    .map((item) => item.value)
    .reduce((a, b) => a + b, 0);

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
              <LanguageChangeButton
                sx={{ position: "absolute", right: 80, top: 14 }}
                onChangeLang={handleChangeLang}
              />
              <ModeSwitch
                sx={{ position: "absolute", right: 16, top: 16 }}
                checked={mode === "dark"}
                onClick={onChangeMode}
              />
            </>
          )}
        </Grid>
        <Grid item xs={12} textAlign="center" mt={2} mb={3}>
          <Typography variant="body1" component="span">
            {t("message.welcome")}
          </Typography>
        </Grid>
        <Title title={t("subtitle.about_author")} />
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
              ごましおきなこ
              <br />
              <br />
              新潟で生まれ、山形と秋田で育ち、仙台で生きているエンジニアです。
              <br />
              主にReact、Laravelを利用したシステムの開発・改修を行なっています。
            </Typography>
          </Grid>
          {isMobile && (
            <Grid item xs={12} sm={4} mt={3}>
              <History />
            </Grid>
          )}
        </Grid>
        <Title title={t("subtitle.about_site")} />
        <Grid item container>
          <Typography variant="body1" component="div">
            とりあえずReactを書きたかったので作りました。
            <br />
            色々試しているので、不具合や異変があれば
            <Link
              href="https://github.com/Masumi-SAJIKI/portfolio/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            にてご連絡ください。
          </Typography>
        </Grid>
        <Title title={t("subtitle.skill")} />
        <Grid item container spacing={1} mb={4}>
          <Grid item xs={12} sm={6}>
            <WindowCard
              width="100%"
              height={isMobile ? "550px" : "500px"}
              color="secondary"
            >
              <Stack
                direction="row"
                textAlign="center"
                justifyContent="center"
                alignItems="flex-start"
                height="100%"
              >
                <Box
                  flexGrow={1}
                  my={1}
                  mx={3}
                  height={isMobile ? "450px" : "400px"}
                >
                  <Typography pb={1}>{t("message.used_language")}</Typography>
                  <PieChart
                    series={[
                      {
                        data: usedLanguages,
                        valueFormatter: (v) =>
                          new Intl.NumberFormat(i18next.language, {
                            style: "percent",
                          }).format(v.value / sum),
                      },
                    ]}
                    margin={{
                      top: isMobile ? -50 : 0,
                      bottom: 80,
                      left: 0,
                      right: 0,
                    }}
                    slotProps={{
                      legend: {
                        direction: "row",
                        position: { vertical: "bottom", horizontal: "middle" },
                        padding: 5,
                      },
                    }}
                  />
                </Box>
              </Stack>
            </WindowCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WindowCard color="secondary" width="100%">
              <SkillCard
                title={t("skill.other")}
                icon={<FaceRetouchingNaturalIcon />}
                skills={[
                  { name: "MySQL", rating: 2 },
                  { name: "PostgreSQL", rating: 1 },
                  { name: "Firebase", rating: 2 },
                  { name: "Git", rating: 2 },
                  { name: "Backlog", rating: 2 },
                  { name: "Jira", rating: 1 },
                  { name: "Excel", rating: 3 },
                ]}
              />
            </WindowCard>
            <WindowCard color="secondary" width="100%" sx={{ mt: 1 }}>
              <StyledCardContents
                title={t("skill.qualification")}
                icon={<SchoolIcon />}
              >
                <ul>
                  {[
                    {
                      date: new Date("2018-07-01"),
                      name: "Oracle Certified Java Programmer, Silver SE 8",
                    },
                  ].map((item) => (
                    <li key={item.name}>
                      <Typography component="span" mr={1} color="GrayText">
                        {format(item.date, "yyyy年MM月")}
                      </Typography>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </StyledCardContents>
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
                    ver: "0.5.0",
                    date: new Date("2024-03-31"),
                    note: "スキル一覧を記入しました。",
                  },
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
              <LanguageChangeButton onChangeLang={handleChangeLang} />
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
