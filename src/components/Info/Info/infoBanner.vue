<template>
    <div class="banner">
        <swiper2 :sites="bannerdata"></swiper2>
    </div>
</template>

<script>
    import swiper2 from "./infoSwiper2.vue"
    export default {
        name: "banner",
        props:["bannerdata"],
        components:{
          swiper2,
        }
    }
</script>

<style scoped>
  .banner{
    height: 2.6rem;
    width: 100%;
    background: #f1f1f1;
    padding: 0.1rem 0;
    box-sizing: border-box;
  }
</style>
