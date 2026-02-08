import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "assets/pattern.png";
import color_cone from "assets/cone_colorcone_red.svg";
import book from "assets/book_01_brown.svg";
import ie from "assets/ie.svg";

import MainContents from "component/MainContents";
import Archives from "component/Archives";
import { useState } from "react";
import Link from "component/Link";
import FlowStrings from "component/FlowStrings";
import PageTitle from "component/PageTitle";

export default function Top() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = useState<"top" | "archives">("top");
  return (
    <Grid container style={{ height: "100vh", color: "black" }}>
      {!isMobile && (
        <Grid
          size={2}
          style={{
            backgroundColor: "#7EACB5",
            boxShadow: "inset -4px 0 0 #bebebeff",
            borderRight: "2px solid #8a8a8aff",
          }}
        >
          <Box mt={2} textAlign="center">
            <Box mb={2}>
              <FlowStrings>メニュー</FlowStrings>
            </Box>
            <Link image={ie} title="TOP" onClick={() => setPage("top")} />
            <Link
              image={book}
              title="ホームページアーカイブ"
              onClick={() => setPage("archives")}
            />
            <Link image={color_cone} title="工事中" onClick={() => {}} />
            <Box mb={2} mt={12}>
              ・・・使用した素材・・・
            </Box>
            <Link
              title="DOT ILLUST 様"
              onClick={() => window.open("https://example.com", "_blank")}
            />
          </Box>
        </Grid>
      )}
      <Grid
        size={isMobile ? 12 : 10}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {isMobile && (
          <>
            <PageTitle isMobile={isMobile} />
            <Box mt={2} textAlign="center">
              <Box mb={2}>
                <FlowStrings>メニュー</FlowStrings>
              </Box>
              <Link image={ie} title="TOP" onClick={() => setPage("top")} />
              <Link
                image={book}
                title="ホームページアーカイブ"
                onClick={() => setPage("archives")}
              />
              <Link image={color_cone} title="工事中" onClick={() => {}} />
            </Box>
            <div
              style={{ marginTop: 48, marginBottom: 48, textAlign: "center" }}
            >
              ・・・・・・・・・・・・・・・・・・・・・・・
            </div>
          </>
        )}
        {page === "archives" ? <Archives /> : <MainContents />}
        <br />
        <Typography variant="caption" component="div" textAlign="center">
          Copyright © 2024 ごましおきなこ All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
