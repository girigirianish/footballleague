var path = require("path");
var webpack = require("webpack");

const buildFolder = "build";

module.exports = {
  devServer: {
    inline: true,
    contentBase: "./build",
    port: 3000
  },
  devtool: "cheap-module-eval-source-map",
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["react", "es2015"]
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.png$/,
        loader: "url-loader"
      }, {
        test: /\.jpg$/,
        loader: "file-loader"
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      }
    ]
  },
  output: {
    path: path.join(__dirname, buildFolder, "js"),
    filename: "js/bundle.min.js"
  },
  externals: {
    cheerio: "window",
    "react/lib/ExecutionEnviroment": true,
    "react/lib/react/ReactContext": true
  },
  plugins: [
    new webpack
      .optimize
      .OccurrenceOrderPlugin()
  ]
};
