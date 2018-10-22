<template>
  <!--section部分-->
  <section>
    <product-list-section-ul :imgData="sectiondata.lists"></product-list-section-ul>
    <product-list-section-img :smallImg="sectiondata.titleImg"></product-list-section-img>
    <product-list-section-ul :imgData="sectiondata.lists"></product-list-section-ul>
    <product-list-section-img :smallImg="sectiondata.titleImg"></product-list-section-img>
    <product-list-section-ul :imgData="sectiondata.lists"></product-list-section-ul>
    <product-list-section-img :smallImg="sectiondata.titleImg"></product-list-section-img>
    <product-list-section-ul :imgData="sectiondata.lists"></product-list-section-ul>
  </section>
</template>

<script>
  import ProductListSectionUl from "./ProductListSectionUl";
  import ProductListSectionImg from "./ProductListSectionImg";
  export default {
    name: "ProductListSection",
    components: {ProductListSectionImg, ProductListSectionUl},
    props:["sectiondata"],
    created(){
      console.log(this.sectiondata)
    }
  }
</script>

<style scoped>
  /*section部分*/
  section{
    width:100%;
  }
</style>
