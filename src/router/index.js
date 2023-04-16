import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component:  () => import('@/views/login.vue'),
  },
  {
    path: '/',
    component:  Layout,
    children:[
      {
        path: '/index',
        component: () => import('@/views/index.vue'),
        name: 'Index',
        meta:{
          title:'首页',
          icon:''
        }
      },
    ]
  },
  
]

const router = new VueRouter({
  // 键和值不相同时，不能省略
  routes:constantRoutes
})

export default router
