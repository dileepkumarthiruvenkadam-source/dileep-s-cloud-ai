import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base should match the repository name when deploying to GitHub Pages
  // Use root base for Netlify / provider subdomains. If deploying to GitHub Pages
  // with a repo path, set this to '/dileep-s-cloud-ai/' before building.
  base: '/dileep-s-cloud-ai/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
