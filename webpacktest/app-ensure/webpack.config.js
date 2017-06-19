var path = require('path')

module.exports = function(env) {
  return {
    entry: './js/entry.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }
}