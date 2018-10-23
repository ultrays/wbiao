<template>
  <div>
    <Title :title="item.title"></Title>
    <img class="banner" v-for="img in item.bannerImgs" :src="img" alt="" v-if="item.bannerImgs"/>
    <Swiper2 class="swiper2" :imgs="item.swiperImgs" v-if="item.swiperImgs"></Swiper2>
  </div>
</template>

<script>
  import Title from "./IndexSectionTitle";
  import Swiper2 from './IndexSwiper2';
  export default {
    name: "IndexSection2",
    components: {
      Title,
      Swiper2
    },
    props:["item"]
  }
</script>

<style scoped>
  .banner{
    width: 100%;
  }
  .swiper2{
    padding: .2rem .1rem .1rem;
  }
</style>
