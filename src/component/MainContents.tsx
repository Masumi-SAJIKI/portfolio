import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Table from "component/Table";
import TableRow from "component/TableRow";
import TableCell from "component/TableCell";
import BlinkingText from "component/BlinkingText";

import me from "assets/me.png";
import PageTitle from "component/PageTitle";
import Link from "component/Link";

export default function MainContents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ratingToStars = (rating: number) =>
    "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Box mx={1} mt={2}>
      {!isMobile && <PageTitle isMobile={isMobile} />}
      <Box mb={2} mt={3}>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 6 }}
            textAlign={isMobile ? "center" : "right"}
            alignItems="center"
          >
            <img src={me} width={300} style={{ marginRight: 24 }} />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            textAlign={isMobile ? "center" : "left"}
          >
            <Typography component="span" fontSize="20px" fontWeight="bold">
              このサイトの管理者について
            </Typography>
            <br />
            <br />
            <b>ごましおきなこ</b>
            <br />
            新潟で生まれ、山形と秋田で育ち、仙台で生きているエンジニアです。
            <br />
            Webシステムの設計・開発を主に行っています。
            <br />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2} mb={3} textAlign="center">
        <Typography component="span" fontSize="20px" fontWeight="bold" mb={2}>
          このサイトについて
        </Typography>
        <br />
        とりあえずReactを書きたかったので作りました。
        <br />
        色々試しているので、不具合や異変があれば
        <a
          href="https://github.com/Masumi-SAJIKI"
          target="_blank"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          GitHub
        </a>
        または
        <a
          href="https://x.com/kinakoGomashio"
          target="_blank"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Twitter
        </a>
        にてご連絡ください。
        <br />
        <br />
      </Box>
      <Box mt={2} mb={3} textAlign="center">
        <Typography component="span" fontSize="20px" fontWeight="bold" mb={2}>
          スキルセット
        </Typography>

        {isMobile ? (
          <Table style={{ width: "100%", marginTop: 8 }}>
            <TableRow>
              <TableCell>スキル</TableCell>
              <TableCell>経験度</TableCell>
            </TableRow>
            {[
              { name: "React", rating: 3 },
              { name: "TypeScript", rating: 3 },
              { name: "PHP/Laravel", rating: 3 },
              { name: "Java/SpringFW", rating: 1 },
              { name: "Kotlin/SpringFW", rating: 1 },
              { name: "C#", rating: 2 },
              { name: "MySQL", rating: 2 },
              { name: "PostgreSQL", rating: 1 },
              { name: "Firebase", rating: 2 },
              { name: "Git", rating: 3 },
              { name: "Backlog", rating: 3 },
              { name: "Jira", rating: 1 },
              { name: "Excel", rating: 3 },
            ].map(({ name, rating }) => (
              <TableRow key={name}>
                <TableCell key={name} style={{ width: "100%" }}>
                  {name}
                </TableCell>
                <TableCell key={name + "_rating"} style={{ width: "100%" }}>
                  {ratingToStars(rating)}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        ) : (
          <Table style={{ width: 600, marginTop: 8 }}>
            <TableRow>
              <TableCell>スキル</TableCell>
              <TableCell>経験度</TableCell>
              <TableCell>スキル</TableCell>
              <TableCell>経験度</TableCell>
            </TableRow>
            {[
              [
                { name: "React", rating: 3 },
                { name: "MySQL", rating: 2 },
              ],
              [
                { name: "TypeScript", rating: 3 },
                { name: "PostgreSQL", rating: 1 },
              ],
              [
                { name: "PHP/Laravel", rating: 3 },
                { name: "Firebase", rating: 2 },
              ],
              [
                { name: "Java/SpringFW", rating: 1 },
                { name: "Git", rating: 3 },
              ],
              [
                { name: "Kotlin/SpringFW", rating: 1 },
                { name: "Backlog", rating: 3 },
              ],
              [
                { name: "C#", rating: 2 },
                { name: "Jira", rating: 1 },
              ],
              [{ name: "Excel", rating: 3 }],
            ].map((pair, idx) => (
              <TableRow key={idx} cols={4}>
                {pair.map(({ name, rating }) => (
                  <>
                    <TableCell key={name} style={{ width: 150 }}>
                      {name}
                    </TableCell>
                    <TableCell key={name + "_rating"} style={{ width: 150 }}>
                      {ratingToStars(rating)}
                    </TableCell>
                  </>
                ))}
                {pair.length === 1 && (
                  <>
                    <TableCell style={{ width: 150 }}></TableCell>
                    <TableCell style={{ width: 150 }}></TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </Table>
        )}
      </Box>
      <Box textAlign="center" mt={8}>
        ◼️◼️◼️　<BlinkingText>更新履歴</BlinkingText>　◼️◼️◼️
      </Box>
      {isMobile ? (
        <Table style={{ width: "100%", marginTop: 8 }}>
          {[
            {
              ver: "0.7.0",
              date: new Date("2026-02-08"),
              note: "サイトのデザインを一新しました、今までの機能は全部廃止してます",
            },
            {
              ver: "0.6.0",
              date: new Date("2024-04-14"),
              note: "2次元バーコード作成画面をひっそり追加しました",
            },
            {
              ver: "0.5.0",
              date: new Date("2024-03-31"),
              note: "スキル一覧を記入しました",
            },
            {
              ver: "0.4.0",
              date: new Date("2024-03-30"),
              note: "アクセスカウンターを追加しました",
            },
            {
              ver: "0.3.0",
              date: new Date("2024-03-28"),
              note: "全体的に書き換えました。多言語対応を追加",
            },
            {
              ver: "0.2.0",
              date: new Date("2024-03-27"),
              note: "とりあえずひっそりと公開しました",
            },
          ].map(({ ver, date, note }) => (
            <>
              <TableRow key={ver}>
                <TableCell style={{ display: "flex" }}>
                  <span style={{ flexGrow: 1 }}>v{ver}</span>
                  <span style={{ flexGrow: 1, textAlign: "right" }}>
                    {date.toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow key={ver}>
                <TableCell>{note}</TableCell>
              </TableRow>
            </>
          ))}
        </Table>
      ) : (
        <Table style={{ width: 900, marginTop: 8 }}>
          <TableRow>
            <TableCell>バージョン</TableCell>
            <TableCell>日付</TableCell>
            <TableCell style={{ width: 600 }}>内容</TableCell>
          </TableRow>
          {[
            {
              ver: "0.7.0",
              date: new Date("2026-02-08"),
              note: "サイトのデザインを一新しました、今までの機能は全部廃止してます",
            },
            {
              ver: "0.6.0",
              date: new Date("2024-04-14"),
              note: "2次元バーコード作成画面をひっそり追加しました",
            },
            {
              ver: "0.5.0",
              date: new Date("2024-03-31"),
              note: "スキル一覧を記入しました",
            },
            {
              ver: "0.4.0",
              date: new Date("2024-03-30"),
              note: "アクセスカウンターを追加しました",
            },
            {
              ver: "0.3.0",
              date: new Date("2024-03-28"),
              note: "全体的に書き換えました。多言語対応を追加",
            },
            {
              ver: "0.2.0",
              date: new Date("2024-03-27"),
              note: "とりあえずひっそりと公開しました",
            },
          ].map(({ ver, date, note }) => (
            <TableRow key={ver}>
              <TableCell>v{ver}</TableCell>
              <TableCell>{date.toLocaleDateString()}</TableCell>
              <TableCell style={{ width: 600 }}>{note}</TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {isMobile && (
        <Box textAlign="center">
          <Box mb={2} mt={12}>
            ・・・使用した素材・・・
          </Box>
          <Link
            title="DOT ILLUST 様"
            onClick={() => window.open("https://example.com", "_blank")}
          />
        </Box>
      )}
    </Box>
  );
}
