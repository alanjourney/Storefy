import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
      shared: path.resolve(__dirname, "src/shared"),
      widgets: path.resolve(__dirname, "src/widgets"),
      entities: path.resolve(__dirname, "src/entities"),
      features: path.resolve(__dirname, "src/features"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/variables/variables.scss" as *;`,
      },
    },
  },
});
