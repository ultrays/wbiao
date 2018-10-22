<template>
  <footer>
    <p class="cartsLeft">
      <a href="">
        <img src="../../../static/chen/img/service.jpg" alt="">
        <span>客服</span>
      </a>
      <a href="">
        <img src="../../../static/chen/img/gogo.jpg" alt="">
        <span>店铺</span>
      </a>
      <a href="">
        <img src="../../../static/chen/img/carts.jpg" alt="" @click="back">
        <span>购物车</span>
      </a>
    </p>
    <p class="cartsMiddle">加入购物车</p>
    <p class="cartsRight">立即购买</p>
  </footer>
</template>

<script>
  export default {
    name: "IndexFooter",
    methods:{
      back(){
        this.$router.push({
          path:"/carts"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer{
    width:100%;
    height:.5rem;
    background: #fff;
    display: -webkit-flex;
    margin-bottom:0;
  }
  .cartsLeft{
    width:39%;
    border-right:2px solid #f6f6f6;
    display: -webkit-flex;
    padding-top:.09rem;
    padding-bottom: .5rem;
  }
  .cartsLeft a{
    width:33.33%;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column;
    font-size:.1rem;
    color:#787878;
  }
  .cartsLeft a img{
    width:.18rem;
    height:.18rem;
    margin-bottom: .05rem;
  }
  .cartsMiddle{
    width:29%;
    line-height: .5rem;
    text-align:center;
    font-size: .14rem;
    color:#595959;
  }
  .cartsRight{
    flex:1;
    background: #d90000;
    color:#fff;
    line-height: .5rem;
    text-align:center;
    font-size: .14rem;
  }
  .para{
    background: #fff;
    height:.37rem;
    font-size:.12rem;
    color:#777777;
    line-height: .37rem;
    display: -webkit-flex;
    justify-content: space-around;
    border:1px solid #e3e3e3;
    font-weight:600;
  }
  .para span:first-child{
    color:#da0a0a;
  }
  .remind{
    width:3.35rem;
    height:.5rem;
    background: #f1f1f1;
    font-size:.1rem;
    color:#9b9b9b;
    margin:.2rem auto;
    box-sizing: border-box;
    padding:.08rem;
    border-radius: 5px;
  }
  .reminder{
    width:100%;
  }
  .reminder img{
    width:100%;
  }
  .connBox{
    padding:.12rem .1rem;
  }
  .imgStore{
    width:100%;
  }
  .store01{
    width:100%;
  }
  .storePic{
    width:100%;
    box-sizing: border-box;
    padding:.2rem;
  }
  .storePic_li{

  }
  .storePic_li_img{
    width:100%;
  }
  .information{
    display: -webkit-flex;
    padding:.16rem 0;
  }
  .placeBox{
    display: block;
    border-right:1px solid #dddddd;
    width:86%;
    display: -webkit-flex;
    flex-direction: column;
  }
  .place{
    font-size:.14rem;
    color:#333333;
    font-weight:600;
    line-height: .14rem;
  }
  .placeIfo{
    font-size:.12rem;
    color:#acacac;
    width:83%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .25rem;
  }
  .phoneBox{
    flex:1;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .phone{
    width:.36rem;
    height:.36rem;
  }
  .loadMore{
    padding-bottom:.12rem;
    font-size:.12rem;
    color:#868686;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .rightGo{
    width:.05rem;
    height:.05rem;
    margin-left:.05rem;
  }
</style>
