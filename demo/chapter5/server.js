const path = require('path')

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const express = require('express')
const app = express()

const createApp = require('./dist/server/server.js').default

// console.info(createApp)
const resolve = file => path.resolve(__dirname, file)
  // 使用express的static方法
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use('/dist', serve('dist/client', true))
app.use(function(req,res,next){
  // 使用bunlde懒加载0.js时，引用路径是不正确的，我不知道怎么配置，这儿强行改一下
  if(/\.js$/.test(req.url)){
    res.redirect('/dist' + req.url)
  } else {
    next()
  }
})
app.get('*', (req, res) => {
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
  }, err => {
    throw err
  })
})

app.listen(8002)
