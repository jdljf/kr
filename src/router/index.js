import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import loginContainer from '../container/loginContainer'
import Tag from '../components/Tag'
import MsgShow from '../components/MsgShow'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path: '/',
    component: loginContainer,
    //redirect: loginContainer  // 这里的重定向导致了两次的编辑器加载
  },
  // {
  //   path: '/login',
  //   name: 'loginContainer',
  //   component: loginContainer
  // },
  {
    path: '/home',
    name: 'home',
    component: index, 
  },  
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/Msgshow',
    name: 'MsgShow',
    component: MsgShow
  },
  
]
})