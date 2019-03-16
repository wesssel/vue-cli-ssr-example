// router.js
import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('./components/HelloWorld.vue')

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: HelloWorld,
        props: {  msg: 'Hello, World!' }
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  })
}
