import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/customer/Create.vue')
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: () => import('../components/customer/InvoiceList.vue')
  },
  {
    path: '/editinvoice',
    name: 'editinvoice',
    component: () => import('../components/customer/EditInvoice.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
