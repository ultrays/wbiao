<template>
  <div>
    <div class="order">
      <div class="order_tit">我的订单<a href="#"><i></i></a></div>
      <div class="order_con">
        <li><a href="#"><i class="iconfont icon-yifukuan"></i>待付款</a></li>
        <li><a href="#"><i class="iconfont icon-icon_dingdan_daifahuomiaobianpx"></i>待发货</a></li>
        <li><a href="#"><i class="iconfont icon-daishouhuo2"></i>待收货</a></li>
        <li><a href="#"><i class="iconfont icon-daipingjia"></i>待评价</a></li>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserOrder"
    }
</script>

<style scoped>
  .order{
   width: 100%;
    box-sizing: border-box;
    height: 1.25rem;
    background: #fff;
    padding: 0 0.14rem;
    margin-bottom: 0.08rem;
  }
  .order_tit{
    box-sizing: border-box;
    height:0.43rem;
    font-size: 0.14rem;
    line-height: 0.43rem;
    /*background: pink;*/
    /*padding-right:0.26rem;*/
    border-bottom:2px solid #f1f1f1;
  }
  .order_tit i{
    display: block;
    height: 0.43rem;
    width: 0.2rem;
    float:right;
    background: url(../../../../static/feng/my-img/order_tit.png) no-repeat center center;
    background-size: 0.08rem 0.18rem;
  }
  .order_con{
    display: flex;
    justify-content: space-around;
  }
  .order_con li{
    /*width: 0.36rem;*/
    height: 0.8rem;
    font-size:0.12rem;
  }
  .order_con li a{
    color:#4b4b4b;
  }
  .order_con li i{
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.15rem;
    margin:0.18rem auto 0.1rem;
  }
</style>
