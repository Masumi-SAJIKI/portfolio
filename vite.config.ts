import react from "@vitejs/plugin-react";
import * as path from "path";
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
    rollupOptions: {
      output: {
        manualChunks: {
          analytics: [
            "firebase/app",
            "firebase/analytics",
            "firebase/firestore",
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      assets: path.resolve(__dirname, "src/assets"),
      component: path.resolve(__dirname, "src/component"),
      globalstate: path.resolve(__dirname, "src/globalstate"),
      hook: path.resolve(__dirname, "src/hook"),
      page: path.resolve(__dirname, "src/page"),
      resources: path.resolve(__dirname, "src/resources"),
      routes: path.resolve(__dirname, "src/routes"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
  },
});
