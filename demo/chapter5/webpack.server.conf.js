var path = require('path')
  // var merge = require('webpack-merge')

const config = {
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'express': 'express/index.js'
    }
  },
  target: 'node',
  devtool: '#source-map',
  entry: {
    server: './entry-server.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
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

module.exports = config
