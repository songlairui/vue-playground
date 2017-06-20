var path = require('path')

module.exports = {
  entry: {
    bundle: './entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['env', { modules: false }]
        ],
        plugins: [
          "syntax-dynamic-import"
        ]
      }
    }]
  }
}
