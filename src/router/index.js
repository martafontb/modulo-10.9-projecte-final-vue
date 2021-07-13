import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "users" */ '../views/Home.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/users/user/:name',
    name: 'User',
    props: true,
    component: () => import(/* webpackChunkName: "clients" */ '../components/User.vue')
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import(/* webpackChunkName: "pictures" */ '../views/Pictures.vue')
  },
  {
    path: '/pictures/picture/:id',
    name: 'Picture',
    props: true,
    component: () => import(/* webpackChunkName: "clients" */ '../components/Picture.vue')
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')

  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
