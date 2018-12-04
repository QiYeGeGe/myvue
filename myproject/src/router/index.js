/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Category from '../pages/category/category.vue'
import Know from '../pages/know/know.vue'
import Cart from '../pages/cart/cart.vue'
import Profile from '../pages/profile/profile.vue'

// 必须声明使用
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉#
  // 配置应用所有的路由
  routes: [
    {
      path: '/home',
      component: Home, // 只有当请求对应的path才会执行import()加载对应的包
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/know',
      component: Know,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
