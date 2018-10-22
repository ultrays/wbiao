<template>
  <div class="box">
    <!--section部分-->
      <section>
        <!--左边-->
        <sort-section-left  :leftdata="sectiondata" @send="get"></sort-section-left>
        <!--右边-->
        <sort-section-right :rightdata="sectiondata[num].listPage"></sort-section-right>
        <!--客服-->
        <p class="service">
          <img class="letter" src="../../../static/chen/img/letter.jpg" alt="">
        </p>

      </section>
  </div>
</template>
<script>
    import SortSectionLeft from "./SortSectionLeft";
    import SortSectionRight from "./SortSectionRight";
    export default {
        name: "SortSection",
        components: {SortSectionRight, SortSectionLeft},
        props:["sectiondata"],
      data(){
        return {
          num:0
        }
      },
      created(){
        console.log(this.sectiondata[this.num].listPage)
      },
      methods:{
        get(i){
          this.num=i;
          console.log("num"+this.num)
        }
      }
    }

</script>
<style scoped>
  body{ background: #ffffff; display: -webkit-flex;flex-direction:column;height: 100%;}
  html,body{height: 100%;}
  .box{
    width:100%;
    -webkit-flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  /*section部分*/
  section{
    width:100%;
    display: -webkit-flex;
  }
  .service{
    width:.32rem;
    height:.32rem;
    background: #fff;
    z-index:300;
    border-radius:50%;
    border:2px solid #ebebeb;
    position:fixed;
    bottom:.7rem;
    right:.05rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .letter{
    width:.32rem;
    height:.32rem;
    border-radius:50%;
  }
</style>
