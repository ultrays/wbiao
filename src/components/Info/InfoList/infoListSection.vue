<template>
    <section>
      <section1 :site1="listSectionData.listSection1"></section1>
      <section2 :site2="listSectionData.listSection2"></section2>
      <section1 :site1="listSectionData.listSection3"></section1>
      <section2 :site2="listSectionData.listSection4"></section2>
      <section1 :site1="listSectionData.listSection5"></section1>
      <section2 :site2="listSectionData.listSection6"></section2>
      <section1 :site1="listSectionData.listSection7"></section1>
      <section2 :site2="listSectionData.listSection8"></section2>
      <section1 :site1="listSectionData.listSection9"></section1>
      <section2 :site2="listSectionData.listSection10"></section2>
      <section1 :site1="listSectionData.listSection11"></section1>
      <section2 :site2="listSectionData.listSection12"></section2>
      <section1 :site1="listSectionData.listSection13"></section1>
    </section>
</template>

<script>
  import section1 from "./infoListSection1.vue"
  import section2 from "./infoListSection2.vue"
  export default {
      name: "Section",
      components:{section1,section2},
      props:["listSectionData"]
  }
</script>

<style scoped>
  section{
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
  }
</style>
