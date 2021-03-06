import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Recommend from '../views/Recommend.vue'
import Recommend1 from '../views/Recommend1.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/recommend1',
    component: Recommend1
  },
  {
    path: '/recommend',
    component: Recommend
  }
  , {
    path: '/register',
    component: Register
  }
  , {
    path: '/login',
    component: Login
  }
  , {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
