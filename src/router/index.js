import Vue from 'vue'
import Router from 'vue-router'
// import index from '../view/index'
import loginContainer from '../container/loginContainer'
import CommitTable from '../components/CommitTable'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path: '/',
    // component: index,
    redirect: loginContainer  // 这里的重定向导致了两次的编辑器加载
  },
  {
    path: '/login',
    name: 'loginContainer',
    component: loginContainer
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/view/index'), 
  },  
  {
    path: '/commit',
    name: 'CommitTable',
    component: CommitTable
  }
]
})