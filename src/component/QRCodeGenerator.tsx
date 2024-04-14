import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import QRCode from "qrcode";
import Title from "component/Title";

export default function QRCodeGenerator() {
  const [url, setUrl] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [width, setWidth] = useState(200);

  useEffect(() => {
    if (value === "") {
      setUrl("");
    }
    QRCode.toDataURL(value, { width })
      .then((url: string) => {
        setUrl(url);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, [value, width]);

  return (
    <Container sx={{ px: 3, pb: 16, height: "100vh" }}>
      <Grid container>
        <Grid item xs={12}>
          <Title title="QRコードの作成" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="QRコードの内容"
            fullWidth
            multiline
            margin="none"
            sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Box textAlign="right">
            <Typography variant="caption" color="gray">
              {value.length}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="width"
            fullWidth
            margin="none"
            sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
            value={width}
            onChange={(e) =>
              setWidth(
                isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
              )
            }
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          {url.length === 0 ? (
            <Skeleton variant="rectangular" width={width} height={width} />
          ) : (
            <img src={url} />
          )}
          <br />
          <Typography variant="caption">
            QRコードの商標はデンソーウェーブの登録商標です。
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
