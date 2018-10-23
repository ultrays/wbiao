<template>
  <div>
    <InfoDetailHeader></InfoDetailHeader>
    <InfoDetailSection :detailData="data.detailData"></InfoDetailSection>
    <InfoDetailFooter></InfoDetailFooter>
  </div>
</template>

<script>
  import InfoDetailHeader from "../components/Info/InfoDetail/infoDetailHeader";
  import InfoDetailSection from "../components/Info/InfoDetail/infoDetailSection";
  import InfoDetailFooter from "../components/Info/InfoDetail/InfoDetailFooter";
  import {InfoDetail} from "../apis/infodetail";
  export default {
      name: "InfoDetail",
      components:{InfoDetailHeader,InfoDetailSection,InfoDetailFooter},
      data(){
        return{
          data:{
            detailData:{
              sites:{
                sectionTop:{
                  zhujie:{}
                }
              },
              ulData:{
                title:""
              }
            }
          }
        }
    },
    methods:{
      catch(){
        InfoDetail.catch((data)=>{
          // console.log(data)
          this.data=data;
        })
      }
    },
    created(){
        this.catch();
    }
  }
</script>

<style scoped>

</style>
