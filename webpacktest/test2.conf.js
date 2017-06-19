var path = require('path')
const config = {
  entry: './input1.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'output2-bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' }
    ]
  }
}

module.exports = config