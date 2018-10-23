<template>
  <div v-if="!loading">
    <product-list-header></product-list-header>
    <product-list-nav></product-list-nav>
    <product-list-section :sectiondata="listData"></product-list-section>
    <product-list-service></product-list-service>
  </div>

</template>

<script>
    import ProductListHeader from "../components/ProductList/ProductListHeader";
    import ProductListNav from "../components/ProductList/ProductListNav";
    import ProductListSection from "../components/ProductList/ProductListSection";
    import ProductListService from "../components/ProductList/ProductListService";
    import {productList} from '../apis/ProductList'
    export default {
        name: "ProductList",
        components: {ProductListService, ProductListSection, ProductListNav, ProductListHeader},
        data(){
          return{
            listData:[],
            loading:false
          }
        },
        methods:{
        },
      created(){
          this.loading = true;
          let that = this;

          let ids =this.$route.query.id;
        console.log(ids)

        productList.getCat(ids,(data)=>{
            this.listData = data;
            that.loading=false
          })
      }
    }
</script>

<style scoped>

</style>
