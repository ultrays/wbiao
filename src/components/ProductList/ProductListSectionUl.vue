<template>
  <ul class="list_ul">
    <li class="list_ul_li" v-for="item in imgData" @click="www(item.id)">
      <img class="watchPic" :src="item.src" alt="">
      <p class="watch_des">
        <span class="watch_name">{{item.watchName}}</span>
        <span class="watch_txt"> {{item.watchDesc}}</span>
      </p>
      <p class="money">
        <span class="money01">￥{{item.currMoney}}</span>
        <span class="money02">￥{{item.pastMoney}}</span>
      </p>
      <p class="open">
        <span class="selfShow">自营</span>
        <span class="transition">销量 {{item.saleVolume}}</span>
      </p>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "ProductListSectionUl",
        props:["imgData"],
        created(){
          // console.log(this.imgData)
        },
      methods:{
        www(id){
          this.$router.push({
            path:"/productDetail",
            query:{
              id:id
            }
          })
        }
      }
    }
</script>

<style scoped>
  .list_ul{
    width:100%;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom:.03rem;
    background:#f1f1f1;

  }
  .list_ul_li{
    width:49%;
    padding-bottom:.02rem;
    margin-bottom: .08rem;
    background: #fff;
  }
  .watchPic{
    width:100%;
    height:2.2rem;
  }
  .open,.watch_des,.money{
    display: -webkit-flex;
    line-height:.27rem;
    align-items: center;
    /*justify-content: center;*/
    padding:0 .08rem;
  }
  .watch_name,.money01{
    display:flex;
    font-size:.12rem;
    color:#080808;
    font-weight:600;
    display: -webkit-flex;

  }
  .watch_txt,.money02{
    font-size:.12rem;
    color:#666666;
    width:60%;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    margin-left:.03rem;
    /*display: -webkit-flex;*/

  }
  .watch_name{
    /*width:*/
  }
  .money01{
    font-size:.14rem;
  }
  .money02{
    font-size:.12rem;
    margin-top:.02rem;
    color:#cacaca;
    text-decoration: line-through;
  }
  .selfShow{
    display: block;
    width:.28rem;
    height:.12rem;
    line-height: .12rem;
    text-align: center;
    font-size:.12rem;
    border: 1px solid #debb8d;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    color:#debb8d;
  }
  .transition{
    font-size:.1rem;
    color:#999999;
    margin-left:.05rem;
  }
</style>
