const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
  // entry: './entry-server.js',
  entry: '../demo1.js',
  output: {
    filename: 'server.js'
  }
})