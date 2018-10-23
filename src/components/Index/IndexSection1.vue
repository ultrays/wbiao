<template>
  <div>
    <Title :title="item.title"></Title>
    <Swiper1 :imgs="item.swiperImgs"></Swiper1>
    <div class="brand">
      <img v-for="img in item.brandImgs" :src="img" alt=""/>
    </div>
  </div>
</template>

<script>
  import Title from './IndexSectionTitle';
  import Swiper1 from './IndexSwiper1';
  export default {
    name: "IndexSection1",
    components:{
      Title,
      Swiper1
    },
    props:["item"]
  }
</script>

<style lang="scss" scoped>
  .brand{
    overflow: hidden;
    img{
      width: 33.3%;
      float: left;
    }
  }
</style>
