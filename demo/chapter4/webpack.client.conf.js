const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  entry: {
    main: './entry-client.js'
  },
  output: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
})
