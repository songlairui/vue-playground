const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index4.template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div> 访问来自{{ url }}</div>`
  })

  const context = {
    title: 'SSR with template',
    meta: `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">`
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('内部服务器错误')
      console.info(err)
      return
    }
    res.end(html)
  })
})

server.listen(8002)