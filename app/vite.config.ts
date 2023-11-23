import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [vanillaExtractPlugin()],
});

export default config;
