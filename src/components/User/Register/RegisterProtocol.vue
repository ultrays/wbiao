<template>
<div>
  <div class="protocol">
    <p>点击下一步意味着您同意</p><a href="#">《万表用户协议》</a>
  </div>
</div>
</template>

<script>
    export default {
        name: "RegisterProtocol"
    }
</script>

<style scoped>
  .protocol{
    width: 100%;
    height: 0.56rem;
    padding-left:0.1rem;
  }
  .protocol p{
    line-height: 0.56rem;
    float:left;
    font-size: 0.12rem;
    color:#666666;
  }
  .protocol a{
    display: block;
    float:left;
    line-height: 0.56rem;
    font-size: 0.12rem;
    color:#e60000;
  }
</style>
