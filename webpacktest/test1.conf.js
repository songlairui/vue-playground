var path = require('path')
module.exports = {
  entry: './input1.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'output1-bundle.js'
  }
}