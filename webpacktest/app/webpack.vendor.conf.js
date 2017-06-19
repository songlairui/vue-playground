var path = require('path')
var webpack = require('webpack')


module.exports = function(env) {
  return {
    entry: {
      main: './index-vendor.js',
      vendor: 'moment'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[chunkhash].[name].js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        // name 变成 names 才行
        names: ['vendor', 'manifest'],
        // 最小chunks 不理解
        // 启用最小chunks之后，mainfest回变大，main，vendor文件变小，发生改动后，只有manifest文件变化。
        // minChunks: function(module) {
        //   return module.context && module.context.indexOf('node_modules') !== 1
        // }
      })
    ]
  }
}