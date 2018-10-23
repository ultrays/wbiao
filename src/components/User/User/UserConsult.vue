<template>
<div>
  <div class="consult">
    <router-link to="/Service"><i class="iconfont icon-weibiaoti-"></i></router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "UserConsult"
    }
</script>

<style scoped>
  .consult{
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 50px;
    background: #fff;
    position: fixed;
    right:0.08rem;
    bottom:0.7rem;
    box-shadow: 0 0.015rem 0.02rem #d9d9d9;
  }
  .consult a{
    display: block;
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 50px;
  }
  .consult a i{
    display: block;
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 50px;
    line-height: 0.25rem;
    text-align: center;
  }
</style>
