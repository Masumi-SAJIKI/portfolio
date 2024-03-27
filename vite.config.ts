import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
process.env.VITE_APP_VERSION = process.env.npm_package_version;
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  base: "/portfolio/",
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },
});
