<template>
  <header>
    <router-link :to="url" class="backRount">
      <span class="back"></span>
    </router-link>
    <span class="nav">资讯首页</span>
  </header>
</template>

<script>
    export default {
        name: "infoDetailHeader",
        data(){
          return{
            "url":"info"
          }
        }
    }
</script>

<style scoped>
  header{
    display:flex;
    align-items: center;
    width: 100%;
    height: 0.53rem;
    background: #b28850;
  }
  header .backRount{
    display:flex;
    align-items: center;
  }
  .back{
    margin-left: 0.2rem;
    width: 0.15rem;
    height: 0.15rem;
    background: url("../../../../static/dan/image/back.png") no-repeat left center;
    background-size: 0.1rem;
  }
  .nav{
    font-size: 0.16rem;
    color: #ffffff;
  }
</style>
