var path = require('path')


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
  }
}