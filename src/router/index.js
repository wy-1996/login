import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 自己写的页面
import Vidio from '../components/demo/vidio.vue'
import Footer from '../components/demo/footer.vue'
import specialSmall from '../components/demo/specialSmall.vue'
import MainBanner from '../components/demo/MainBanner.vue'
import Setting from '../components/demo/setting.vue'
import GlobalActions from '../components/demo/globalActions.vue'
import Login from '../components/demo/Login.vue'
import Register from '../components/demo/Register.vue'
import RealTime from '../components/demo/RealTime.vue'
import Nav from '../components/Nav.vue'
import Top from '../components/Top.vue'
import Broadcast from '../components/Broadcast.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/vidio',
    name:'Vidio',
    component:Vidio
  },
  {
    path:'/footer',
    name:'Footer',
    component:Footer
  },
  {
    path:'/specialSmall',
    name:'specialSmall',
    component:specialSmall
  },
  {
    path:'/mainBanner',
    name:'MainBanner',
    component:MainBanner
  },
  {
    path:'/nav',
    name:'Nav',
    component:Nav
  },
  {
    path:'/top',
    name:'Top',
    component:Top
  },
  {
    path:'/setting',
    name:'Setting',
    component:Setting
  },
  {
    path:'/broadcast',
    name:'Broadcast',
    component:Broadcast
  },
  {
    path:'/globalActions',
    name:'GlobalActions',
    component:GlobalActions
  },
  {
    path:'/realTime',
    name:'RealTime',
    component:RealTime
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
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
