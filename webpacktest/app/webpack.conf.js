var path = require('path')
module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  rules:[
    {
      test:/\.css$/,
      // use:'css-loader'
      use: ExtraceTextPlugin.extract({
        use:'css-loader'
      })
    }
  ],
  plugins:[
    new ExtractTextPlugin('style.css')
  ]
}
