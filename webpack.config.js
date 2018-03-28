/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractPlugin = new ExtractTextPlugin({
  filename: './assets/css/app.css'
});

const destinationFolder = 'dist';

module.exports = {
  entry: {
    app: './src/app.jsx',
  },
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(__dirname, destinationFolder),
  },
  context: path.resolve(__dirname, "."),
  devServer: {
    contentBase: [path.resolve(__dirname, "./assets/media"), path.resolve(__dirname, destinationFolder)],
    compress: true,
    port: 12000,
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    stats: 'errors-only',
    open: true
  },
  devtool: 'inline-eval-cheap-source-map',//'inline-source-map', // Development only
  plugins: [
    new CleanWebpackPlugin([destinationFolder]),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractPlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'es6'] // all these files will be considered as modules
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        include: [/src/, /assets/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        include: [/src/, /assets/],
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]&relativeUrls=false'
        ],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/',
              publicPath: './assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
}