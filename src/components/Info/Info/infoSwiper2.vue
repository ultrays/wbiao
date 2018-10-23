<template>
  <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide_2 forPage" v-for="(site,index) in sites" :key="index">
        <img :src="site.imgsrc" />
        <p class="bannerPage">{{site.title}}</p>
      </swiper-slide>
  </swiper>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "swiper2",
        props:["sites"],
        components:{
          swiper,
          swiperSlide
        },
      data(){
        return {
          swiperOption: {
                autoplay:{
                  disableOnInteraction: false
                },
                loop:true,
                slidesPerView :1.1,
                centeredSlides :true,
                centerInsufficientSlides: true,
                spaceBetween : 10,
                loopedSlides:2,
          }
        }
      }
    }
</script>

<style scoped>
  .forPage{
    position: relative;
    width: 100%;
    height: 2.4rem;
  }
  .forPage img{
    width: 100%;
    height: 2.4rem;
    border-radius: 0.06rem;
  }
  .bannerPage{
    height: 0.35rem;
    width: 100%;
    line-height: 0.35rem;
    font-size: 0.12rem;
    border-radius:0 0 0.06rem 0.06rem;
    text-indent: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#ffffff ;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
