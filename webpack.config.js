const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: {
    app: './javascript/app.js'
  },
  output: {
    path: './client',
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devtool: 'eval',
  devServer: {
    port: 3333,
    contentBase: './client',
    inline: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less?sourceMap')
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new ngAnnotatePlugin({
      add: true
    })
  ],
  postcss: function () {
    return [require('postcss-cssnext'), require('precss')]
  }
}