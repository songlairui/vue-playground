var path = require('path')

module.exports = {
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devtool: '#source-map',
  entry: {
    bundle: './entry-client.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
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
