<template>
<div>
  <header>
    <div class="header_left">
      <router-link to="/Login"></router-link>
    </div>
    <div class="header_con">注册</div>
  </header>
</div>
</template>

<script>
    export default {
        name: "RegisterHeader"
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
  .header_left{
    width: 0.39rem;
    height: 0.44rem;
    display: block;

  }
  .header_left a{
    display: block;
    width: 0.39rem;
    height: 0.44rem;
    overflow: hidden;
    background: url(../../../../static/feng/my-img/back.png) no-repeat left center;
    background-size:0.12rem 0.20rem;
  }
  .header_con{
    width: 3.46rem;
    height: 0.44rem;
    font-size: 0.17rem;
    color:#444444;
    line-height: 0.44rem;
    margin-left:1.2rem;
  }
</style>
