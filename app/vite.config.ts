import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [
          {
            name: "empty-css-imports",
            setup(build) {
              build.onLoad({ filter: /\.css$/ }, () => ({ contents: "" }));
            },
          },
        ],
      },
    }),
  ],
});

export default config;
