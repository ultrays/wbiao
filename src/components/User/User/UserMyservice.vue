<template>
  <div>
    <div class="Myservice">
      <div class="Myservice_tit">我的服务<a href="#"><i class="iconfont icon-kefu"></i>联系万表</a></div>
      <div class="Myservice_con">
        <li><a href="#"><i class="iconfont icon-daifahuo-copy"></i>我的预售</a></li>
        <li><a href="#"><i class="iconfont icon-lipin"></i>我的礼品单</a></li>
        <li><a href="#"><i class="iconfont icon-baoguozhuangtai"></i>售后服务</a></li>
        <li><a href="#"><i class="iconfont icon-shiliangzhinengduixiang"></i>我的积分</a></li>
      </div>
      <div class="Myservice_con">
        <li><a href="#"><i class="iconfont icon-fapiao-"></i>发票管理</a></li>
        <li><a href="#"><i class="iconfont icon-youhui"></i>优惠券</a></li>
        <li><a href="#"><i class="iconfont icon-yue1"></i>余额</a></li>
        <li><a href="#"><i class="iconfont icon-zuji-outline"></i>足迹</a></li>
      </div>
      <div class="Myservice_con">
        <li><a href="#"><i class="iconfont icon-pinglun"></i>我的评论</a></li>
        <li><a href="#"><i class="iconfont icon-fenxiang"></i>推荐</a></li>
        <li><a href="#"><i class="iconfont icon-data-"></i>手表管家</a></li>
        <li><a href="#"><i class="iconfont icon-zhuce-"></i>维修订单</a></li>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserMyservice"
    }
</script>

<style scoped>
  .Myservice{
    height: 2.86rem;
    background: #fff;
    padding:0 0.14rem;
    margin-bottom:0.59rem;
  }
  .Myservice_tit{
    height:0.43rem;
    font-size: 0.14rem;
    line-height: 0.43rem;
    border-bottom:2px solid #f1f1f1;
  }
  .Myservice_tit a{
    display: inline-block;
    float: right;
    margin-left:1.5rem;
    color:#333333;
  }
  .Myservice_tit i{
    display: block;
    height: 0.43rem;
    line-height: 0.3rem;
    width: 0.4rem;
    float:left;
  }
  .Myservice_con{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #f1f1f1;
  }
  .Myservice_con li{
    width: 0.65rem;
    height: 0.8rem;
  }
  .Myservice_con li a{
    display: block;
    color:#4b4b4b;
    font-size:0.11rem;
    text-align: center;
  }
  .Myservice_con li i{
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.15rem;
    margin:0.18rem auto 0.1rem;
  }
</style>
