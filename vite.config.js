import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: process.env.VITE_SITE_BASE || "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        original: resolve(import.meta.dirname, "index.html"),
        revamped: resolve(import.meta.dirname, "revamped/index.html"),
      },
    },
  },
});
