const merge = require('webpack-merge')
  // 把一些内容置为外部依赖，打包的时候，不需要包了
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  entry: './entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    filename: '[name].server.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
