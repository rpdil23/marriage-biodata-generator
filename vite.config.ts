import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"], // Corrected typo: "includeAssests" → "includeAssets"
  manifest: {
    name: "திருமண பயோடேட்டா - Marriage Biodata Generator",
    short_name: "Biodata Generator",
    description:
      "Create beautiful marriage biodata with traditional astrological charts. Generate professional biodata in Tamil and English with instant PDF download.",
    icons: [
      {
        src: "/marriage-biodata-generator/android-chrome-192x192.png", // Add base path
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/marriage-biodata-generator/android-chrome-512x512.png", // Add base path
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/marriage-biodata-generator/apple-touch-icon.png", // Add base path
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/marriage-biodata-generator/maskable_icon.png", // Add base path
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/marriage-biodata-generator/", // Match the base path
    start_url: "/marriage-biodata-generator/", // Match the base path
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), VitePWA(manifestForPlugIn)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/marriage-biodata-generator/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
}));
