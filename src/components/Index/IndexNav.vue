<template>
  <nav>
    <div class="item" v-for="item in items">
      <img :src=item.img alt=""/>
      <span>{{item.info}}</span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "IndexNav",
    data(){
      return {
        items:[
          {
            img:"../../../static/shuai/img/index/nav-pic1.png",
            info:"新品"
          },
          {
            img:"../../../static/shuai/img/index/nav-pic2.png",
            info:"男表"
          },
          {
            img:"../../../static/shuai/img/index/nav-pic3.png",
            info:"限时购"
          },
          {
            img:"../../../static/shuai/img/index/nav-pic4.png",
            info:"奢品共享"
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    padding: .19rem 0;
    background-image: linear-gradient(90deg,#fff 0,#f5f5f5 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: .44rem;
        margin-bottom: .025rem;
      }
      span{
        font-size: .11rem;
        color: #666;
      }
    }
  }
</style>
