<template>
<div class="cateWrap">
    <div class="cateHeader">
        <i></i>
        <p>搜索商品</p>

    </div>
     <div class="line"></div>
    <div class="fenlei">
      <div class="fenleiWrap">
        <ul class="leftItems">
          <li class="item">
            <router-link to="/">爆品专区</router-link>
          </li>
          <li class="item">
            <router-link>爆品专区</router-link>
          </li>
          <li class="item">
            <router-link>爆品专区</router-link>
          </li>
          <li class="item">
            <router-link>爆品专区</router-link>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
    export default {
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.cateWrap
  font-size 0.5rem
  width 100%
  .cateHeader
    height 0.9rem
    margin 0.2rem
    p
      box-sizing border-box
      width 93%
      height 0.6rem
      background-color lightgray
      margin 0 auto
      line-height 0.6rem
      border-radius 0.1rem
      font-size 0.3rem
      text-align center
  .line
    top-border-1px(lightgray)
    margin-top -0.3rem
    height 0
    width 7.5rem
    border-left 0px solid #000
    border-right 0px solid #000
    border-bottom 0px solid #000
  .fenlei
    width 100%
    .fenleiWrap
      .leftItems
        width 1.62rem
        text-align center
        border-right 1px solid lightgray
        .item
          font-size 0.3rem
          height 1rem
          line-height 1rem
</style>
