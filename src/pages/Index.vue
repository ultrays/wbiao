<template>
  <div class="page">
    <Header></Header>
    <div class="content">
      <Banner :item="data.bannerData"></Banner>
      <Nav></Nav>
      <Section1 :item="data.section1Data"></Section1>
      <Section2 v-for="(item,index) in data.section2Data" :key="index" :item="item"></Section2>
      <Section3 :items="data.section3Data"></Section3>
      <Up id="goUpBtn" @goUpClick="goUp"></Up>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import $ from 'jquery';
  import {INDEX} from "../commons/commons";
  import Header from '../components/Index/IndexHeader';
  import Banner from '../components/Index/IndexBanner';
  import Nav from '../components/Index/IndexNav';
  import Section1 from '../components/Index/IndexSection1';
  import Section2 from '../components/Index/IndexSection2';
  import Section3 from '../components/Index/IndexSection3';
  import Footer from '../components/Index/IndexFooter';
  import Up from '../components/Index/IndexUp';
  export default {
    name: "Index",
    components:{
      Header,
      Banner,
      Nav,
      Section1,
      Section2,
      Section3,
      Footer,
      Up
    },
    data(){
      return{
        data:{
          bannerData:{},
          section1Data:{},
          section2Data:{},
          section3Data:{}
        }
      }
    },
    methods:{
      reqData(){
        fetch(INDEX).then(res=>{
          res.json().then(data=>{
            console.log(data);
            this.data=data;
          })
        })
      },
      goUp(){
        $(".content").animate({"scrollTop":0},800);
      }
    },
    created(){
      this.reqData();
    },
    mounted(){
      //绑定滚轮滚动事件
      $(".content").scroll(function(){
        if(this.scrollTop>=400){
          $("#goUpBtn").fadeIn(500);
        }else{
          $("#goUpBtn").fadeOut(500);
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .page{
    font-family: Helvetica,Tahoma,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei",STXihei,STHeiti,Heiti,SimSun,sans-serif;
    display: flex;
    flex-direction: column;
    height: 100%;
    .content{
      flex: 1;
      overflow-y: scroll;
      #goUpBtn{
        display: none;
      }
    }
  }
</style>
