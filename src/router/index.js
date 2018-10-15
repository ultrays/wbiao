import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Sort from '../pages/Sort'
import Info from '../pages/Info'
import Carts from '../pages/Carts'
import User from '../pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
