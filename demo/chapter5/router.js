import Vue from 'vue'
import Router from 'vue-router'

import Home from './App.vue'
// const Home = () => import('./Home.vue')
const About = () => import('./About.vue')
// import About from './About.vue'
// const About = require.ensure([], function(require) {
//   require('./About.vue')
// })

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        component: Home,
        // component:
      }, {
        path: '/',
        component: About
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      }
    ]
  })
}
