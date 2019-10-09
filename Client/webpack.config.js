"use strict";
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = !process.env.production;
const isProduction = process.env.production;
const distPath = path.join(__dirname, "../Build");

const extractSass = new ExtractTextPlugin({
  filename: "main.css",
  disable: isDevelopment
});

const config = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: distPath
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [ /node_modules/ ],
      use: [{
        loader: "babel-loader",
        options: {
          presets: [ "env", "react" ]
        }
      }]
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
        loader: "file-loader",
        options: {
          name: "images/[name][hash].[ext]"
        }
      }, {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 70
          }
        }
      }],
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "fonts/[name][hash].[ext]"
        }
      },
    }]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: distPath,
    compress: true,
    open: true,
    port: 9000
  }
};

if (isDevelopment) {
  fs.readdirSync(distPath)
    .map((fileName) => {
      if ([ ".css", ".js" ].includes(path.extname(fileName))) {
        return fs.unlinkSync(`${distPath}/${fileName}`);
      }

      return "";
    });
}

if (isProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // eslint-disable-next-line camelcase
        drop_console: true,
        unsafe: true
      }
    })
  );
}

module.exports = config;
