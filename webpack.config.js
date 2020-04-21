const path = require("path");
const outputDir = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/script.js",
    game: "./src/game.js"
  },
  output: {
    path: outputDir,
    filename: "[name].js",
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    }]
  }
};
