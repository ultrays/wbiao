<template>
  <div class="box" v-if="!loading">
    <ProductDetailHeader></ProductDetailHeader>
    <ProductDetailSection class="boxmin" :sect="datas"></ProductDetailSection>
    <ProductDetailFooter></ProductDetailFooter>
  </div>

</template>

<script>
    import $ from 'jquery'
    import ProductDetailHeader from "../components/ProductDetail/ProductDetailHeader";
    import ProductDetailSection from "../components/ProductDetail/ProductDetailSection";
    import ProductDetailFooter from "../components/ProductDetail/ProductDetailFooter";
    import {ProductDetail} from "../apis/ProductDetail"
    export default {
        name: "ProductDetail",
      components: {ProductDetailFooter, ProductDetailSection, ProductDetailHeader},
      data(){
          return{
            datas:[],
            loading:false
          }
      },

      created(){
          this.loading=true;
          let that = this;
        let ids=this.$route.query.id;
        ProductDetail.getCat(ids,(data)=>{
          this.datas = data;
            console.log(this.datas)
        that.loading = false
        })
      }
    }
</script>

<style scoped>
.box{
  height: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}
.boxmin{
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }
</style>
