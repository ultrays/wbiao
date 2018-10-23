<template>
    <section>
      <sectionTop :sites="sectiondata.messageSection1"></sectionTop>
      <sectionMain :sites="sectiondata.messageSection2"></sectionMain>
    </section>
</template>

<script>
  import  sectionTop from "./infoSectionTop.vue"
  import  sectionMain from "./infoSectionMain.vue"
    export default {
        name: "Section",
        components:{sectionTop,sectionMain},
        props:["sectiondata"]
    }
</script>

<style scoped>
  section{
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
</style>
