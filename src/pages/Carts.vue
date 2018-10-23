<template>
    <div class="box" v-if="!loading">
      <carts-header></carts-header>
      <carts-section class="box1" :list="data"></carts-section>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import CartsHeader from "../components/carts/cartsHeader";
    import CartsSection from "../components/carts/cartsSection";
    import CartsFooter from "../components/carts/cartsFooter";
    import { carts } from "../apis/carts"

    export default {
        name: "Carts",
      components: {CartsFooter, CartsSection, CartsHeader},
      data(){
          return{
            data:[],
            loading:false
          }
      },
      created() {
          this.loading = true;
          let that = this;
          carts.getCat((data)=>{
            this.data = data;
            console.log(data);
          })
          that.loading = false
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
  overflow: hidden;
}
  .box1{
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }
</style>
