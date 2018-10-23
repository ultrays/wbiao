<template>
  <!--头部-->
  <header>
    <img class="leftPic1" src="../../../static/chen/img/left.jpg" alt="" @click="back">
    <form action="">
      <input type="text" placeholder="搜索商品">
      <img src="../../../static/chen/img/micro.png" alt="" class="micro">
    </form>
    <img src="../../../static/chen/img/menu.jpg" alt="" class="leftPic2" >
  </header>
</template>

<script>
    export default {
        name: "ProductListHeader",
      methods:{
          back(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:.44rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  form{
    width:2.86rem;
    height:.28rem;
    border-radius:.18rem;
    position: relative;
    display: -webkit-flex;
    margin:0 .15rem;
  }
  input{
    width:2.86rem;
    height:.28rem;
    border-radius:.18rem;
    outline: none;
    border:0;
    background: #f2f2f2;
    text-indent:.35rem;
    font-size:.12rem;
    color:#8f8f8f;
  }
  .micro{
    width:.12rem;
    height:.12rem;
    position: absolute;
    top:.07rem;
    left:.1rem;
  }
  .leftPic1{
    width:.1rem;
    height:.17rem;
  }
  .leftPic2{
    width:.14rem;
    height:.1rem;
  }
</style>
