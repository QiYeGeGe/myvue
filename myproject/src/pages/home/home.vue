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
          <div class="ulWrap">
            <ul class="tabItems">
              <li class="item">推荐</li>
              <li class="item">居家</li>
              <li class="item">鞋包</li>
              <li class="item">服装</li>
              <li class="item">电器</li>
              <li class="item">洗护</li>
              <li class="item">饮食</li>
              <li class="item">餐厨</li>
              <li class="item">婴童</li>
              <li class="item">问题</li>
              <li class="item">特色</li>
            </ul>
          </div>
          <div class="arrow"></div>
        </div>
    </div>
</template>
<script>
    export default {

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
      .ulWrap
        width:6.5rem
        background #7e8c8d
        .tabItems
          clearFix()
          height:0.06rem
          width:11rem
          .item
            height:0.6rem
            width:1rem
            font-size :0.4rem
            text-align center
            float:left
      .arrow


</style>
