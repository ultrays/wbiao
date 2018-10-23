<template>
  <footer>
    <p class="footerFirstP"><span class="spritebox1"></span>首页</p>
    <p><span class="spritebox2"></span>发现</p>
    <p><span class="spritebox3"></span>选表</p>
    <p><span class="spritebox4"></span>我的</p>
  </footer>
</template>

<script>
    export default {
        name: "infoFooter"
    }
</script>

<style scoped>
  footer{
    width: 100%;
    height: 0.5rem;
    background: #262626;
    position:fixed;
    left:0;
    bottom:0;
    display: flex;
  }
  footer p{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size:0.12rem;
    color: #999;
  }
  footer p span{
    display: block;
    width: 0.25rem;
    height: 0.25rem;
  }
  footer .footerFirstP{
    color: #d1af67;
  }
  .spritebox1{
    background: url(../../../../static/dan/image/sprite.png) no-repeat -73px -27px;
  }
  .spritebox2{
    background: url(../../../../static/dan/image/sprite.png) no-repeat -73px 0px;
  }
  .spritebox3{
    background: url(../../../../static/dan/image/sprite.png) no-repeat 4px -45px;
  }
  .spritebox4{
    background: url(../../../../static/dan/image/sprite.png) no-repeat -54px -73px;
  }
</style>
