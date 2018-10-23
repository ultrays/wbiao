<template>
    <div>
      <header>
        <div class="header_left">
          <router-link to="/User"></router-link>
        </div>
        <div class="header_con">登录</div>
        <div class="header_right">
          <router-link to="/Register">注册</router-link>
        </div>
      </header>
    </div>
</template>

<script>
    export default {
        name: "PloginHeader"
    }
</script>

<style scoped>
  header{
    width:3.45rem;
    height:0.44rem;
    border-bottom:2px solid #dddddd;
    background-size: cover;
    line-height: 0.44rem;
    margin-bottom:0.31rem;
    padding:0 0.15rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
  }
  header div{
    width: 1.2rem;
    height: 0.44rem;
  }
  .header_left a{
    width: 1.2rem;
    height: 0.44rem;
    display: block;
    background: url(../../../../static/feng/my-img/back.png) no-repeat left center;
    background-size:0.12rem 0.20rem;
  }
  .header_con{
    font-size: 0.17rem;
    color:#444444;
    line-height: 0.44rem;
    text-align: center;
  }
  .header_right a{
    display: block;
    font-size: 0.17rem;
    color:#676767;
    line-height: 0.44rem;
    text-align: right;
  }
</style>
