import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2018",
    minify: "terser",
    cssMinify: true,
    sourcemap: false,
    // Inline assets <10 KB to save round-trips
    assetsInlineLimit: 10240,
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
        pure_funcs: ["console.log", "console.info", "console.debug"]
      }
    },
    rollupOptions: {
      output: {
        // Split vendor from app code; each lazy component gets its own tiny chunk
        manualChunks(id) {
          if (id.includes("node_modules/react-dom")) return "react-dom";
          if (id.includes("node_modules/react")) return "react";
        }
      }
    }
  }
});

