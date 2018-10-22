<template>
  <header>
    <img class="picHref" src="../../../static/peng/left.jpg" alt="" @click="back">
    <div class="usage">
      <!--<a href="javascript:" class="current">商店</a>-->
      <!--<a href="javascript:">详情</a>-->
      <!--<a href="javascript:">评价</a>-->
      <!--<a href="javascript:">门店</a>-->
    </div>
    <img  class="picHref1" src="../../../static/peng/threeDot.jpg" alt="">
  </header>
</template>

<script>
    export default {
        name: "ProductDetailHeader",
      methods:{
          back(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  header{
    height:.44rem;
    width:100%;
    justify-content:space-between;
    align-items: center;
    padding:0 .12rem 0 .1rem;
    display: -webkit-flex;
    background: #fff;
    box-sizing: border-box;
  }
  .picHref{
    width:.08rem;
    height:.14rem;
  }
  .picHref1{
    width:.13rem;
    height:.03rem;
  }
  /*.usage{*/
    /*width:2.5rem;*/
    /*height:.44rem;*/
    /*display: -webkit-flex;*/
    /*justify-content: space-around;*/
    /*-webkit-box-sizing: border-box;*/
    /*-moz-box-sizing: border-box;*/
    /*box-sizing: border-box;*/
  /*}*/
  header a{
    font-size:.14rem;
    line-height: .44rem;
    color:#484848;
    font-weight:600;
  }
  .current{
    border-bottom: .02rem solid #252525;
    box-sizing: border-box;
  }
</style>
