const path = require("path");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.build.json"),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    filename: "index.js",
  },
  externals: [
    "@idealjs/app-menu",
    "@idealjs/grape-layout",
    "effector",
    "effector-react",
    "effector-react/scope",
    "html2canvas",
    "immer",
    "react",
    "react/jsx-runtime",
    "nanoid",
    "pixi.js",
    "reselect",
  ],
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: "static" })],
};
