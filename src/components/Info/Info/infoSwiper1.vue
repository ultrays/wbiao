<template>
    <swiper :options="swiperOption" class="out">
        <swiper-slide class="swiper-slide_1" v-for="(site,index) in sites" :key="index">
          <router-link :to="site.url" class="swiperRount">
            <a @click="activeItem(index)" :class="{checked:site.isChecked}" href="#">{{site.title}}</a>
          </router-link>
        </swiper-slide>
    </swiper>
</template>


<script>
  import "swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "infoswiper1",
    props:["sites"],
    components:{
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOption: {
          slidesPerView : 5.2,
          centeredSlides : false
        }
      }
    },
    methods:{
      activeItem(index){
        this.sites.forEach((site,index)=>{
          site.isChecked=false;
        });
        this.sites[index].isChecked=true;
      }
    }
  }
</script>

<style scoped>
  .swiper-slide_1{
    display: flex;
    justify-content: center;
    font-size:0.14rem;
  }
  .swiper-slide_1 a{
    font-size:0.14rem;
    font-weight: 600;
    color: #333;
  }
  .swiper-slide_1 .checked{
    color: #d1af67;
  }
</style>
