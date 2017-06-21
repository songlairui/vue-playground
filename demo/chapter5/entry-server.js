import { createApp } from './app'

export default context => {
  // 使用promise，异步过程
  return new Promise((resolve, reject) => {
    // 这儿返回app时，同时返回router， 能够操作app中的router，因为指向了router的堆空间
    const { app, router } = createApp()
    router.push(context.url)
    console.info(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // console.info(router)
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      resolve(app)
    }, reject)
  })
}

// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('./index.template.html', 'utf-8')
// })
// const server = require('express')()

// // const createApp = require('./dist/entry-server-bundle.js')

// // console.info(createApp)
// server.get('*', (req, res) => {
//   const context = { url: req.url }

//   createEntry(context)
//     .then(app => {
//       console.info('- app -', app)
//       renderer.renderToString(app, (err, html) => {
//         console.info('--html--', err, html)
//         if (err) {
//           if (err.code === 404) {
//             res.status(404).end('未找到页面')
//           } else {
//             res.status(500).end('内部服务器错误')
//           }
//         } else {
//           res.end(html)
//         }
//       })
//     }, err => {
//       if (err.code === 404) {
//         res.status(404).end('未找到页面')
//       } else {

//         console.info(err)
//         res.status(500).end('内部服务器错误')
//       }
//     })
// })

// server.listen(8002)
