<template>
<div>
  <div class="ID">
    <router-link to="/Plogin"><i></i>账号密码登录</router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "LoginID"
    }
</script>

<style scoped>
  .ID{
    width: 100%;
    height: 0.19rem;
    vertical-align: middle;
  }
  .ID i{
    display: block;
    float: left;
    width: 0.1rem;
    height: 0.11rem;
    background: url(../../../../static/feng/my-img/R.png) no-repeat left top;
    background-size: 0.1rem 0.11rem;
    margin-top:0.05rem;
    margin-right:0.05rem;
  }
  .ID a{
    display: block;
    float:right;
    margin:0 0.15rem 0 0.05rem;
    color:#676767;
    font-size: 0.14rem;
  }
</style>
