<template>
  <!--客服-->
  <p class="service">
    <img class="letter" src="../../../static/chen/img/letter.jpg" alt="">
  </p>
</template>

<script>
    export default {
        name: "ProductListService"
    }
</script>

<style scoped>
  .service{
    width:.34rem;
    height:.34rem;
    background: #fff;
    z-index:300;
    border-radius:50%;
    border:2px solid #ebebeb;
    position:fixed;
    bottom:.7rem;
    right:.05rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .letter{
    width:.34rem;
    height:.34rem;
    border-radius:50%;
  }
</style>
