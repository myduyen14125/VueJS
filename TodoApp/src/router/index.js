import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {layout: 'default'}
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta: {layout: 'default'}
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: () => import('../views/UserDetail.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'unauth'}
  },
  {
    //Match everything -> run when can't find these path above
    path: '*',
    component: () => import('../views/NotFound.vue'),
    meta: { layout: 'unauth'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
