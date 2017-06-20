const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const server = require('express')()

const createApp = require('./dist/server.js').default

// console.info(createApp)

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('未找到页面')
        } else {
          res.status(500).end('内部服务器错误')
        }
      } else {
        res.end(html)
      }
    })
  })
})

server.listen(8002)