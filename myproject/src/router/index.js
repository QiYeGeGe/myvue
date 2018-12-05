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
import jujia from "../pages/home/jujia/jujia"
import tuijian from "../pages/home/tuijian/tuijian"
import xiebao from "../pages/home/xiebao/xiebao"
import fuzhuang from "../pages/home/fuzhuang/fuzhuang"
import dianqi from "../pages/home/dianqi/dianqi"
import xihu from "../pages/home/xihu/xihu"
import yinshi from "../pages/home/yinshi/yinshi"
import canchu from "../pages/home/canchu/canchu"
import yingtong from "../pages/home/yingtong/yingtong"
import wenti from "../pages/home/wenti/wenti"
import tese from "../pages/home/tese/tese"



// 必须声明使用
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉#
  // 配置应用所有的路由
  routes: [
    {
      path: '/home',
      component: Home, // 只有当请求对应的path才会执行import()加载对应的包
      children: [
        {
          path: '/home/jujia',
          component: jujia
        },
        {
          path: '/home/tuijian',
          component: tuijian
        },
        {
          path: '/home/xiebao',
          component: xiebao
        },
        {
          path: '/home/fuzhuang',
          component: fuzhuang
        },
        {
          path: '/home/dianqi',
          component: dianqi
        },
        {
          path: '/home/xihu',
          component: xihu
        },
        {
          path: '/home/yinshi',
          component: yinshi
        },
        {
          path: '/home/canchu',
          component: canchu
        },
        {
          path: '/home/yingtong',
          component: yingtong
        },
        {
          path: '/home/wenti',
          component: wenti
        },
        {
          path: '/home/tese',
          component: tese
        },
        {
          path: '/home',
          redirect: '/home/tuijian'
        },
      ]
    },
    {
      path: '/category',
      component: Category,
      children:[
        {
          path: '/home/wenti',
          component: wenti
        }
      ]
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
