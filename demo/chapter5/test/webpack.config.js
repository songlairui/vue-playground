module.exports = {
  target: 'async-node',
  entry: {
    main: './testexport.js'
  },
  output: {
    filename: '[name].output.js',
    path: __dirname,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
            ['env', { modules: false }]
          ]
          // "presets": [
          //   ["env", { "modules": false }]
          // ]
      }
    }]
  }
}