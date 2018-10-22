<template>
  <header>
    <form>
      <img class="micro" src="../../../static/chen/img/micro.png" alt="">
      <input type="text" placeholder="搜索商品">
    </form>
  </header>
</template>

<script>
    export default {
        name: "SortHeader"
    }
</script>

<style scoped>
  /*头部*/
  header{
    height:.43rem;
    width:100%;
    border-bottom: 1px solid #e5e5e5;
    display: -webkit-flex;
    align-items: center;
    position:re
  }
  form{
    width:3.61rem;
    height:.28rem;
    background:#f1f1f1;
    border-radius:.15rem;
    position: relative;
    margin-left:.1rem;
  }
  .micro{
    width:.12rem;
    height:.12rem;
    position: absolute;
    top:.08rem;
    left:.09rem;
    z-index:100;
  }
  input{
    width:3.61rem;
    height:.28rem;
    border-radius:.23rem;
    outline: none;
    border:0;
    position: absolute;
    text-indent:.28rem;
    background:#f1f1f1;
    line-height: .28rem;
    font-size:.12rem;
    color:#8f8f8f;
  }
</style>
