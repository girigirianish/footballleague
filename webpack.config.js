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
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, buildFolder),
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
