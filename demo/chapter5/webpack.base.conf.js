var path = require('path')

module.exports = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', { modules: 'commonjs' }]
          ],
          plugins: [
            "syntax-dynamic-import"
          ]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}
