<template>
    <div>
      <header>
        <div class="header_left" @click="goBack">
         <a></a>
        </div>
        <div class="header_con" id="Airlines">002号客服_小单</div>
      </header>
    </div>
</template>

<script>
    export default {
        name: "ServiceHeader",
        methods:{
          goBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  header{
    width: 3.6rem;
    height:0.44rem;
    background-size: cover;
    line-height: 0.44rem;
    margin-bottom:0.31rem;
    padding-left:0.15rem;
    background: #fbc7a8;
    display: -webkit-flex;
    align-items:center;
    justify-content: space-around;
  }
  .header_left{
    width: 1.2rem;
    height: 0.44rem;
  }
  .header_left a{
    height: 0.44rem;
    display: block;
    background: url(../../../../static/feng/my-img/kf.png) no-repeat left center;
    background-size:0.18rem 0.15rem;
  }
  .header_con{
    width: 2.8rem;
    height: 0.44rem;
    font-size: 0.17rem;
    color:#444444;
    line-height: 0.44rem;
    font-weight: 900;
  }
</style>
