import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // port serwera
  },
  build: {
    outDir: "build", // wyjściowy katalog dla projektu
  },
  css: {
    devSourcemap: true, // ustawia mapy źródłowe dla CSS
  },
});
