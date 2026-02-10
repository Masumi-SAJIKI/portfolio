import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { postCounter } from "api";
import Main from "page/Top/Main";

export default function App() {
  const accessRef = useRef(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (!accessRef.current) {
        if (process.env.NODE_ENV === "production") {
          postCounter();
        }
      }
      accessRef.current = true;
    });
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Main />
    </BrowserRouter>
  );
}
