<template>
  <!--nav部分-->
  <nav>
    <a href="javascript:;" class="order">综合排序</a>
    <a href="javascript:;">销量优先</a>
    <a href="javascript:;" class="priceOrder">价格排序</a>
    <a href="javascript:;"><img src="img/lou.jpg" class="lou" alt="">筛选</a>
  </nav>
</template>

<script>
    export default {
        name: "ProductListNav"
    }
</script>

<style scoped>
  /*nav部分*/
  nav{
    width:100%;
    height:.44rem;
    display: -webkit-flex;
    align-items: center;
    background: #fff;
    margin-bottom:.08rem;
  }
  nav a{
    height:.13rem;
    display: -webkit-flex;
    font-size:.12rem;
    color:#8d8d8d;
    align-items: center;
    justify-content: center;
    flex: 1;

  }
  .lou{
    width:.11rem;
    height:.1rem;
    margin-right:.07rem;
  }
  .priceOrder{
    border-right:1px solid #d5d5d5;
  }
  .order{
    color:#dd1919;
  }
</style>
