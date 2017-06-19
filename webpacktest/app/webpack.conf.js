const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ]
}