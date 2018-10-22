<template>
    <div class="qqq" v-if="!loading">
      <sort-header></sort-header>
      <sort-section :sectiondata="sortdata"></sort-section>
      <sort-footer></sort-footer>
    </div>
</template>
<script>
  import SortHeader from "../components/Sort/SortHeader";
  import SortSection from "../components/Sort/SortSection";
  import SortFooter from "../components/Sort/SortFooter";
  import {sort} from '../apis/sort'
  export default {
    name: "Sort",
    components: {SortFooter, SortSection, SortHeader},
    data(){
      return{
        sortdata:[],
        loading:false
      }
    },
    methods:{
      Car(){
        this.loading = true;
        let that = this;
        sort.getCat((data)=>{
          this.sortdata = data;
          // console.log(this.sortdata)
          that.loading=false
        })
      },
    },
    created(){
      this.Car()

    }
  }
</script>

<style scoped>
 .qqq{
   display: flex;
   flex-direction: column;
   height: 100%;
 }
</style>
