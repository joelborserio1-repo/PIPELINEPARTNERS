import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds static assets into dist/ for Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
  },
});
