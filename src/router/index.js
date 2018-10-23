import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Sort from '../pages/Sort'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Info from '../pages/Info'
import InfoList from '../pages/InfoList'
import InfoDetail from '../pages/InfoDetail'
import Carts from '../pages/Carts'
import User from '../pages/User'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Plogin from '../pages/Plogin'
import Fpass from '../pages/Fpass'
import Service from '../pages/Service'

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
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/infolist',
      name: 'InfoList',
      component: InfoList
    },
    {
      path: '/infodetail',
      name: 'InfoDetail',
      component: InfoDetail
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/plogin',
      name: 'Plogin',
      component: Plogin
    },
    {
      path: '/fpass',
      name: 'Fpass',
      component: Fpass
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    }
  ],
  mode: 'history'
})
