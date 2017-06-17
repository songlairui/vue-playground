const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div> 访问来自{{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('内部服务器错误')
      return
    }
    res.end(`
    <!DOCTYPE html>
    <html lang='zh'>
      <head><title>Hello</title></head>
      <body>${html}</body>
    </html>
    `)
  })
})

server.listen(8002)