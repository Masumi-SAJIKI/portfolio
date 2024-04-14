import { Route, Routes } from "react-router-dom";
import QRCodeGenerator from "page/QRCode/index";
import Main from "page/Top/Main";

export default function Index() {
  return (
    <Routes>
      <Route path="/" index element={<Main />} />
      <Route path="/qrcode" element={<QRCodeGenerator />} />

      <Route path="*" index element={<Main />} />
    </Routes>
  );
}
