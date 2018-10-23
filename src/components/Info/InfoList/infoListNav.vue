<template>
  <nav>
      <Swiper1 :sites="navdata"></Swiper1>
  </nav>
</template>

<script>
  import  Swiper1 from "./infoListSwiper.vue"
    export default {
        name: "Nav",
        props:["navdata"],
        components:{
          Swiper1,
        }
    }
</script>

<style scoped>
  nav{
    height: 0.44rem;
    display: flex;
    align-items: center;
    background:#ffffff;
  }
</style>
