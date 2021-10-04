// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log("__dirname", __dirname);
// if (process.env.NODE_ENV === "development"){

// }


const config = {
//   mode: 'development',
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, './app'),
    filename: '[name].js',
  },
  module: {
      rules:[
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
          }
      ]
  }
};

module.exports = config;