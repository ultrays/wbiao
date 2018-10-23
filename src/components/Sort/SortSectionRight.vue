<template>
  <div class="section_right" v-if="">
    <a href="#">
      <img :src="rightdata.titlePage" alt="" class="pic01">
    </a>
    <!--猜你喜欢-->
    <sort-section-right-find-like :findLike="rightdata.findLike" ></sort-section-right-find-like>
    <!--国际馆-->
    <sort-section-right-internation :internation="rightdata.interNation"></sort-section-right-internation>
    <!--热门品牌-->
    <sort-section-right-top-brand :topBrand="rightdata.topBrand"></sort-section-right-top-brand>
  </div>
</template>

<script>
    import SortSectionRightFindLike from "./SortSectionRightFindLike";
    import SortSectionRightInternation from "./SortSectionRightInternation";
    import SortSectionRightTopBrand from "./SortSectionRightTopBrand";
    export default {
        name: "SortSectionRight",
        components: {SortSectionRightTopBrand, SortSectionRightInternation, SortSectionRightFindLike},
      props:["rightdata"],
      created(){
        console.log("右组建"+this.rightdata)
      }
    }
</script>

<style scoped>
  .section_right{
    width:78%;
    border-left:1px solid #e3e3e3;
    padding: .06rem .08rem 0;
    overflow: hidden;
    margin-left:22%;
    box-sizing: border-box;
  }
  .pic01{
    width:2.68rem;
    height:1.06rem;
    marign-bottom:.05rem;
  }
</style>
