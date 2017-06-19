import Vue from 'vue'
import App from './App.vue'

export function createApp() {
  const app = new Vue({
    render: h => h(App)
  })
  const app1 = new Vue({
    render: function(createElement) {
      return createElement('h1', 'hello world')
    }
  })
  return { app, app1 }
}