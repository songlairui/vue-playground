const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(base, {
  target: 'node',
  entry: {
    server: './entry-server.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  }
})