import Vue from 'vue'
import Router from 'vue-router'
import Carts from '../pages/Carts'
import ProductDetail from '../pages/ProductDetail'
import User from '../pages/User'
import Index from '../pages/Index'
import Sort from '../pages/Sort'
import Info from '../pages/Info'
import SortList from '../pages/ProductList'
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
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/sortList',
      name: 'SortList',
      component: SortList
    }
  ]
})
