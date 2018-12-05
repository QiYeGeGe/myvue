<template>
    <div class="topHeader">
        <div class="search">
          <a href="http://m.you.163.com/">网易严选</a>
          <span>
              <i class="iconfont icon-sousuo1"></i>
              <input  type="text" placeholder="搜索商品">
          </span>
          <span class="login">登录</span>
        </div>
        <div class="tabs">
          <div class="ulWrap" ref="ulWrap">
            <ul class="tabItems">
              <li class="item">
                <router-link to="tuijian">推荐</router-link>
              </li>
              <li class="item">
                <router-link to="jujia">居家</router-link>
              </li>
              <li class="item">
                <router-link to="xiebao">鞋包</router-link>
              </li>
              <li class="item">
                <router-link to="fuzhuang">服装</router-link>
              </li>
              <li class="item">
                <router-link to="dianqi">电器</router-link>
              </li>
              <li class="item">
                <router-link to="xihu">洗护</router-link>
              </li>
              <li class="item">
                <router-link to="yinshi">饮食</router-link>
              </li>
              <li class="item">
                <router-link to="canchu">餐厨</router-link>
              </li>
              <li class="item">
                <router-link to="yingtong">婴童</router-link>
              </li>
              <li class="item">
                <router-link to="wenti">文体</router-link>
              </li>
              <li class="item">
                <router-link to="tese">特色</router-link>
              </li>
            </ul>
          </div>
          <div class="arrow">
            <i class="iconfont icon-iconfontjiantou"></i>
          </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'

    export default {
      mounted(){
        new BScroll('.ulWrap',{
          scrollX: true,
          click: true
        })
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topHeader
    .search
      height:0.88rem
      width: 100%
      display :flex
      justify-content:center
      line-height:0.88rem
      text-align :center
      a
        width:1.84rem
        height:0.533rem
        font-size :0.35rem
      span
        width:4.42rem
        height:0.56rem
        background lightgray
        margin:0.1rem
        border-radius :0.05rem
        position:relative
        i
          position:absolute
          width:0.5rem
          height:0.6rem
          left: 0.25rem
          top:-0.04rem
        input
          font-size:0.3rem
          position: absolute
          top:0.14rem
          left:0.8rem
          width:3rem
          background lightgray
          border:0;
          outline:none
      .login
        width:0.6rem
        height:0.5rem
        font-size:0.25rem
        height:0.4rem
        margin-top :0.15rem
        line-height :0.4rem
    .tabs
      height:0.6rem
      position:relative
      overflow: hidden;
      .ulWrap
        position absolute
        overflow: hidden;
        width:6.5rem
        display inline-block
        .tabItems
          clearFix()
          height:0.06rem
          width:11rem
          display hidden
          .item
            height:0.6rem
            width:1rem
            font-size :0.3rem
            text-align center
            float:left
            line-height :0.6rem
      .arrow
        display inline-block
        width:1rem
        background-color:white
        z-index 100
        position:absolute
        right:-0.1rem
        text-align center
        i
          margin-left 0.2rem
          margin-top  0.1rem
          display block
          width 0.3rem
          height 0.3rem
</style>
