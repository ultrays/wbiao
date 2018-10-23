<template>
  <div class="sectionmain">
    <p class="sectionDetail" v-for="site in sites">
      <a  href="#" class="detailTitle">{{site.title}}
        <img :src="site.imgsrc"/>
        <span class="tips">{{site.sort}}<i>{{site.time}}</i></span>
      </a>
    </p>
  </div>
</template>

<script>
    export default {
        name: "infoSectionMain",
        props:["sites"]
    }
</script>

<style scoped>
  .sectionmain{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
  }
  .sectionDetail{
    display: flex;
    flex-direction: column;
    padding:0.15rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .detailTitle{
    font-size:0.16rem;
    color: #333;
    line-height: 0.24rem;
  }
  .detailTitle img{
    width: 100%;
    margin-top:0.1rem;
    margin-bottom: 0.03rem;
    border-radius: 3px;
  }
  .tips{
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    color: #999;
  }
  .tips i{
    font-style: normal;
  }
</style>
