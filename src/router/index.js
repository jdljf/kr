import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import loginContainer from '../container/loginContainer'
import Home from '../container/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    redirect: loginContainer
  },
  {
    path: '/login',
    name: 'loginContainer',
    component: loginContainer
  },
  {
    path: '/home',
    name: 'home',
    component: index
  },
  {
    path: '/home2',
    name: 'Home',
    component: Home
  }
]
})