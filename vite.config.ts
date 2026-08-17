import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => ({
  plugins: [react()], // بدون أي خيارات إضافية
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));