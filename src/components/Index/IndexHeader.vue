<template>
  <header>
    <div class="logo">
      <img src="../../../static/shuai/img/index/header-logo.png" alt="万表网">
    </div>
    <div class="search">
      <input type="text" placeholder="建行信用卡专享全场12期免息"/>
      <span class="search-icon"></span>
    </div>
    <div class="talk"></div>
  </header>
</template>

<script>
  export default {
    name: "IndexHeader"
  }
</script>

<style lang="scss" scoped>
  header{
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .1rem;
    box-shadow: 2px 2px 1px #f2f2f2;
    .logo{
      display: flex;
      align-items: center;
      img{
        width: .5rem;
      }
    }
    .search{
      height: .25rem;
      font-size: .1rem;
      input{
        width: 2.5rem;
        height: .25rem;
        margin-left: .1rem;
        border: none;
        border-radius: .5rem;
        outline: none;
        text-indent: .3rem;
        font-size: .12rem;
        background: #F1F1F1;
      }
      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #999;
      }
      .search-icon{
         display: block;
         width: 12px;
         height: 12px;
         display: block;
         position: absolute;
         top: 20px;
         left: 85px;
         background: url(../../../static/shuai/img/index/icons.png);
         background-position: -138px -417.5px;
         background-size: 443px;
       }
    }
    .talk{
      width: 36px;
      height: 44px;
      display: block;
      background-image: url(../../../static/shuai/img/index/icons.png);
      background-position: -255px -247px;
      background-size: 443px;
    }
  }
</style>
