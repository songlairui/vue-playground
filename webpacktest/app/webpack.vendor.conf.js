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
    }
    ,plugins:[
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ]
  }
}
