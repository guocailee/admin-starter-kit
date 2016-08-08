var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev.client'].concat(baseWebpackConfig.entry[name])
})
var webpackConfig = {
  module: {
    loaders: utils.styleLoaders({
      sourceMap: true,
      extract: true
    })
  },
  // eval-source-map is faster for development
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].[contenthash].css')
  ]
}
utils.generateHtmlPlugins().forEach(function (v) {
  webpackConfig.plugins.push(v)
})
module.exports = merge(baseWebpackConfig, webpackConfig)
