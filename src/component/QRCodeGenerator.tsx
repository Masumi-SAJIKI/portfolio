import { useEffect, useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import QRCode from "qrcode";
import Title from "component/Title";

export default function QRCodeGenerator() {
  const [value, setValue] = useState<string>("");
  const [values, setValues] = useState<string[]>([""]);
  const [urls, setUrls] = useState<string[]>([""]);
  const [width, setWidth] = useState(200);

  useEffect(() => {
    if (value.length > 0) {
      setValues(value.split("\n"));
    }
  }, [value]);

  const onGenerate = async () => {
    if (values.length === 0) {
      setUrls([]);
    }
    const urlList = await Promise.all(
      values.map((v) => {
        return QRCode.toDataURL(v, { width })
          .then((url: string) => {
            return url;
          })
          .catch((err: unknown) => {
            console.error(err);
            return "";
          });
      })
    );
    setUrls(urlList);
  };
  const onDownload = () => {
    urls.map((url, i) => {
      if (!url) return;
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", values[i] + ".png");
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <Container sx={{ px: 3, pb: 16, height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title title="QRコードの作成" />
          <Typography variant="caption">
            QRコードの商標はデンソーウェーブの登録商標です。
          </Typography>
          <br />
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" onClick={onGenerate}>
            QR作成
          </Button>
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" onClick={onDownload}>
            ダウンロード
          </Button>
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
        <Grid item xs={12}>
          <TextField
            label="改行区切り"
            fullWidth
            margin="none"
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
            }}
            multiline
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Grid>
        {urls &&
          urls.length > 0 &&
          urls.map((url) => (
            <Grid item key={url}>
              <img src={url} />
            </Grid>
          ))}
        <Grid item xs={12} textAlign="center" mt={3}>
          <Typography variant="caption">
            Copyright © 2014 ごましおきなこ All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
