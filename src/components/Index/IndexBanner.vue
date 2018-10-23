<template>
  <div>
    <Swiper1 :imgs="item.swiperImgs"></Swiper1>
  </div>
</template>

<script>
  import Swiper1 from './IndexSwiper1';
  export default {
    name: "IndexBanner",
    components:{
      Swiper1
    },
    props:["item"]
  }
</script>

<style lang="scss" scoped>

</style>
