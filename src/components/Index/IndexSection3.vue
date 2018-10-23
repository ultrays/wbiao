<template>
  <div>
    <div class="title">
      <span class="text">为您推荐</span>
      <span class="line"></span>
    </div>
    <section>
      <div class="item" v-for="item in items">
        <img :src="item.img" alt=""/>
        <p>{{item.name}}</p>
        <p>{{item.info}}</p>
        <p class="price">{{item.price}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "IndexSection3",
    props:["items"]
  }
</script>

<style lang="scss" scoped>
  .title{
    height: .5rem;
    font-size: .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: .2rem 0;
    .text{
      padding: 0 10px;
      background: white;
      font-size: .12rem;
      color: #999;
      letter-spacing: .05rem;
      position: absolute;
    }
    .line{
      width: 90%;
      height: 1px;
      background-color: #efefef;
    }
  }
  section{
    .item{
      float: left;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin-bottom: .5rem;
      img{
        width: 120%;
        margin-bottom: .1rem;
      }
      p{
        font-size: .12rem;
        color: #666;
        line-height: .18rem;
      }
      .price{
         letter-spacing: 1px;
         font-weight: bold;
         margin-top: 6px;
         font-size: .14rem;
         color: #000;
      }
    }
  }
</style>
