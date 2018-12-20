import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home'
import console from '../page/console/console'
import forum from '../page/forum/forum'
import profile from '../page/profile/profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/console',
      name: 'console',
      component: console
    },
    {
      path: '/forum',
      name: 'forum',
      component: forum
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
