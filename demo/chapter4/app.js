const Vue = require('vue')
const App = require('./App.vue')

export function createApp() {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}