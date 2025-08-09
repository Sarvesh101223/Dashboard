import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: [
      // Explicitly allow your Replit preview host
      '72f6234f-fbc6-4d85-95ba-676355a3bab8-00-lybaampm40az.pike.replit.dev'
    ]
  },
});
