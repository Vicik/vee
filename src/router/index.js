import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import all from '../views/all.vue'
import addG from '../views/addG.vue'
import allG from '../views/allG.vue'
import removeG from '../views/removeG.vue'
import addA from '../views/addA.vue'
import allA from '../views/allA.vue'
import send from '../views/send.vue'
import refund from '../views/refund.vue'
import order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: '',
        component: all
      },
      {
        path: '/all',
        component: all
      },
      {
        path: '/addG',
        component: addG
      },
      {
        path: '/allG',
        component: allG
      },
      {
        path: '/removeG',
        component: removeG
      },
      {
        path: '/addA',
        component: addA
      },
      {
        path: '/allA',
        component: allA
      },
      {
        path: '/send',
        component: send
      },
      {
        path: '/refund',
        component: refund
      },
      {
        path: '/order',
        component: order
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
