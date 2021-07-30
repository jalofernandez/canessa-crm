import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { protectedRoutes: true } // set to "true" the protected routes U want
  },
  {
    path: '/editar/:id',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editor.vue'),
    meta: { protectedRoutes: true } // set to "true" the protected routes U want
  },
  {
    path: '/nuevo',
    name: 'Add',
    component: () => import(/* webpackChunkName: "nuevo" */ '../views/Add.vue'),
    meta: { protectedRoutes: true } // set to "true" the protected routes U want
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { protectedRoutes: false } // set to "true" the protected routes U want
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// "beforeEach" function iterate over all existin´routes to apply his inner code in each ones
router.beforeEach((to, from, next) => {
  // if "protectedRoutes" exist apply the following code...
  if (to.matched.some(record => record.meta.protectedRoutes)) {
    const user = auth.currentUser
    console.log(`User from router: ${user}`)
    if (!user) next({ path: '/login' })
    next()
  }
  // ...and if not just go to the route:
  else {
    next()
  }
})

export default router
