// 第一步，创建Vue实例

const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

// 第二步，创建渲染器

const renderer = require('vue-server-renderer').createRenderer()

// 第三步，渲染到html

renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
})