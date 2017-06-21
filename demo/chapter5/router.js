import Vue from 'vue'
import Router from 'vue-router'

import Blank from './Blank.vue'
// import Home from './Home.vue'
const Home = () => import('./Home.vue')
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
        name:'home'
        // component:
      }, {
        path: '/',
        component: Blank
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      }
    ]
  })
}
