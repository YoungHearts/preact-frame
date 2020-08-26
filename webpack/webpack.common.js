/*
 * @Author: yangj
 * @Date: 2019-12-05 16:45:49
 * @LastEditors: yangj
 */
const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'


  },
  optimization: {
    usedExports: true,
    // splitChunks: {
    //   chunks: 'all',
    //   name: false
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   { from: Path.resolve(__dirname, '../public'), to: 'public' }
    // ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: `[name].[hash].[ext]`,
            outputPath: "img",
            publicPath: process.env.DOMAIN?`//${process.env.DOMAIN}/img`:'',
            // publicPath: `//${process.env.DOMAIN ? process.env.DOMAIN : 'localhost:8080'}/img`,
          }
        }
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
    ]
  }
};
