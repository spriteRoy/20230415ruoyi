import router from "./router";
import { getToken } from "./utils/auth";
import store from '@/store/index.js'
import { Message } from "element-ui";

const whiteList = ['/login', '/register']
router.beforeEach((to,from,next) => {
  if (getToken()) {
    if (to.path === '/login') {
      // next()   // 放行
      // next('/') // 跳转到默认路由
      // next() 和 next('/')含义不一样
      next({ path: '/' })
    } else {
      // 判断是否已经获取到用户信息
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          // 根据用户token，进一步获取菜单相关的信息
          store.dispatch('GenerateRoutes').then(accessRoutes => {
            next()
          })
        }).catch(err => {
          Message.error(err)
        })
      } else {
        next()
      }
    }
  } 
  
  
  
  
  else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // next('/login')
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
