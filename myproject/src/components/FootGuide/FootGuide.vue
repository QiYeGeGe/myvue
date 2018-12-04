<template>
  <footer class="footer_guide border-1px">
    <!--
      动态class: 什么时候用对象方式? 类名确定, 只是不确定有没有
    -->
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/category'}" @click="goTo('/category')">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/know'}" @click="goTo('/know')">
      <span class="item_icon">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      </span>
      <span>实物</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/cart'}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwucheman"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        // 编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
