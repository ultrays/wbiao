<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(img,index) in imgs" :key="index">
      <img :src="img" alt=""/>
    </swiper-slide>
    <!--分页器-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  /*组件方式引用*/
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "Swiper1",
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return{
        swiperOption: {
          loop:true,
          autoplay:{
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    props:["imgs"]
  }
</script>

<style lang="scss" scoped>
  img{
    width: 100%;
  }
</style>
<style>
  .swiper-pagination-bullet{
    background: white;
    opacity: 1;
    transition: .3s;
    outline: none;
  }
  .swiper-pagination-bullet-active{
    background: #CCAA7A;
    width: 20px;
    border-radius: 5px;
  }
</style>
