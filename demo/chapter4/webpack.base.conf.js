const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
    // extensions: ['.ts', '.vue', '.js']
  },
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    // noParse: /vue|jquery|backbone|lodash/,
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          ["env"]
          // ["es2015"]
        ]
      }
    }]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vue', 'manifest']
    // })
  ]
}