<template>
  <div class="sectionPart">
    <div class="sectionPDetail" v-for="site in site2">
      <p class="title">{{site.title}}<span>{{site.time}}</span></p>
      <div class="imgbox">
        <img :src="site.imgsrc"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "infolistSection2",
        props:["site2"],
    }
</script>

<style scoped>
  .sectionPart{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .sectionPDetail{
    display: flex;
    justify-content: space-between;
    padding:0.15rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .title{
    display: flex;
    flex-direction: column;
    font-size: 0.15rem;
    color: #333333;
    line-height: 0.24rem;
    margin-right: 0.07rem;
  }
  .title span{
    display: flex;
    justify-content: flex-end;
    font-size: 0.12rem;
    color: #999999;
    margin-right: 0.15rem;
  }
  .sectionPDetail img{
    width: 1.32rem;
  }
</style>
