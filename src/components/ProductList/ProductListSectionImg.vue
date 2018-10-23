<template>
  <a href="">
    <img :src="smallImg" alt="" class="picShow">
  </a>
</template>

<script>
  export default {
    name: "ProductListSectionImg",
    props:["smallImg"]
  }
</script>

<style scoped>
  .picShow{
    width:96%;
    margin: 0 auto;
    margin-bottom:.1rem;
  }
</style>
