<template>
    <div>
      <ListHeader></ListHeader>
      <ListNav :navdata="data.navdata"></ListNav>
      <ListSection :listSectionData="data.listSection"></ListSection>
      <ListFooter></ListFooter>
    </div>
</template>

<script>
  import ListHeader from "../components/Info/InfoList/infoListHeader";
  import ListNav from "../components/Info/InfoList/infoListNav";
  import ListSection from "../components/Info/InfoList/infoListSection";
  import ListFooter from "../components/Info/InfoList/infoListFooter";
  import {InfoList} from "../apis/infolist";
  export default {
    name: "InfoList",
    components: {ListHeader,ListNav,ListSection,ListFooter},
    data(){
      return{
        data:{
          navdata:[
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            },
            {
              title:"",
              url:"",
              isChecked:""
            }
          ],
          listSection:{}
        }
      }
    },
    methods:{
      catch(){
        InfoList.catch((data)=>{
          // console.log(data)
          this.data=data;
        })
      }
    },
    created(){
      this.catch()
    }
  }
</script>

<style scoped>

</style>
