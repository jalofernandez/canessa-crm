import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editor.vue')
  },
  {
    path: '/nuevo',
    name: 'Add',
    component: () => import(/* webpackChunkName: "nuevo" */ '../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
