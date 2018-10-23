<template>
  <div class="findYouLike">
    <p class="titleTxt">
      <img src="img/line.png" alt="" class="line line01">
      国际馆
      <img src="img/line.png" alt="" class="line line02">
    </p>
    <ul class="findYouLike_ul">
      <li class="findYouLike_ul_li" v-for="(item,index) in internation">
        <a href="javascript:;" class="watchall">
          <i>
            <img :src="item.imgSrc" alt="" class="pic_watch">
          </i>
          <span>{{item.txtIfo}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SortSectionRightInternation",
        props:["internation"]
    }
</script>

<style scoped>
  .findYouLike{
    margin-top:.2rem;
  }
  .titleTxt{
    font-size:.12rem;
    color:#9e9e9e;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .2rem;
  }
  .line{
    width:.17rem;
    height:.02rem;
  }
  .line01{
    margin-right:.06rem;

  }
  .line02{
    margin-left:.06rem;
  }
  .findYouLike_ul{
    width:100%;
    display: -webkit-flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .findYouLike_ul_li{
    /*width:.6rem;*/
    width:33.33%;
    margin-bottom:.2rem;

  }
  .watchall{
    font-size:.12rem;
    color:#686868;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:.1rem;
  }
  i{
    width:.6rem;
    height:.6rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  i img{
    width:.6rem;
    height:.6rem;
    border-radius:50%;
  }
</style>
