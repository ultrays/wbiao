<template>
  <!--尾部-->
  <footer>
    <a href="javascript:;" class="footer_a">
      <img src="../../../static/chen/img/icon01.jpg" alt="" class="icon_pic">
      <span>首页</span>
    </a>
    <a href="javascript:;" class="footer_a">
      <img src="../../../static/chen/img/icon02.jpg" alt=""  class="icon_pic">
      <span>分类</span>
    </a>
    <a href="javascript:;" class="footer_a">
      <img src="../../../static/chen/img/icon03.jpg" alt="" class="icon_pic">
      <span>咨询</span>
    </a>
    <a href="javascript:;" class="footer_a">
      <img src="../../../static/chen/img/icon04.jpg" alt="" class="icon_pic">
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="footer_a">
      <img src="../../../static/chen/img/icon05.jpg" alt="" class="icon_pic">
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
    export default {
        name: "SortFooter"
    }
</script>

<style scoped>
  /*尾部*/
  footer{
    width:100%;
    height:.47rem;
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    border-top:1px solid #f6f6f6;
  }
  .footer_a{
    font-size:.09rem;
    color:#454545;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .icon_pic{
    width:.2rem;
    height:.2rem;
    margin-bottom:.04rem;
  }

</style>
