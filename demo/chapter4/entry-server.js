import { createApp } from './main'
var path = require('path')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('../../index3.template.html', 'utf-8')
})

// const Vue = require('vue')
const { app, app1 } = createApp()
  // var debugMsg = `${JSON.stringify(app)}\n------\n${JSON.stringify(app1)}`
  // console.info(debugMsg)
  // console.info(app)
  // console.log('--------------')
  // console.info(app1)



// renderer.renderToString(app1, (err, html) => {
//   if (err) throw err
//   console.log(html)
// })
// renderer.renderToString(app, (err, html) => {
//     if (err) throw err
//     console.log(html)
//   })
server.get('*', (req, res) => {
  const { app } = createApp()
    // console.info(app)
  renderer.renderToString(app, (err, html) => {
    if (err) {
      console.error(err)
      res.status(500).end('内部服务器错误')
      return
    }
    res.end(html)
  })
})

server.listen(8002)