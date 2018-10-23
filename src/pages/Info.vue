<template>
  <div>
    <Header></Header>
    <Nav :navdata="data.navMessage"></Nav>
    <Banner :bannerdata="data.bannerMessage"></Banner>
    <Section :sectiondata="data.sectionMessage"></Section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/Info/Info/infoHeader";
  import Nav from "../components/Info/Info/infoNav";
  import Banner from "../components/Info/Info/infoBanner";
  import Section from "../components/Info/Info/infoSection";
  import Footer from "../components/Info/Info/infoFooter";
  import {Info} from "../apis/info";
  export default {
    name: "Info",
    components: {Nav, Header, Banner, Section, Footer},
    data(){
      return{
        data:{
          navMessage:[
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
          bannerMessage:[],
          sectionMessage:{}
        }
      }
    },
    methods:{
      catch(){
        Info.catch((data)=>{
          console.log(data)
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
