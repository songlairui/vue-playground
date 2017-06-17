const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const Vue = require('vue')

let a = undefined

server.get('*', (req, res) => {
  console.info(req.query)
  if (!a && req.query.id) {
    a = req.query.id
  }
  const app = new Vue({
    data: {
      a,
      url: req.url
    },
    template: `
    <main>
      <h1 v-if='a'>Title {{ a }}</h1>
      <div>url is : {{ url }}</div>
    </main>`
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('内部服务器错误')
      return
    }
    res.end(html)
  })
})

server.listen(8003)