import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/'
import config from '../../config.js'
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: config.indextitle
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
