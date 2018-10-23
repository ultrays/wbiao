<template>
  <header>
    <a class="logobox" href="#"><img src="../../../../static/dan/image/index-logo.png"/></a>
  </header>
</template>

<script>
    export default {
        name: "ListHeader"
    }
</script>

<style scoped>
  header{
    height:0.45rem;
    width: 100%;
    border-bottom: 2px solid #d1af67;
    background: #262626;
    display: flex;
    align-items: center;
  }
  .headerLeft a{
    width: 0.34rem ;
    height: 0.44rem;
    background: url("../../../../static/dan/image/sprite.png") no-repeat 0px 0px;
    background-size: 98px 98px;
  }
  .logobox{
    display: flex;
    position:absolute;
    left:50%;
    transform:translate(-50%);
  }
  .logobox img{
    width: 0.75rem;
    height: 0.15rem;
  }
</style>
