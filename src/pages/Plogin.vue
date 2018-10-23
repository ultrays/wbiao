<template>
  <div>
    <plogin-header></plogin-header>
    <plogin-section></plogin-section>
    <Plogin-submit></Plogin-submit>
    <Plogin-i-d></Plogin-i-d>
  </div>
</template>

<script>
    import PloginHeader from "../components/User/Plogin/PloginHeader";
    import PloginID from "../components/User/Plogin/PloginID";
    import PloginSection from "../components/User/Plogin/PloginSection";
    import PloginSubmit from "../components/User/Plogin/PloginSubmit";
    export default {
        name: "Plogin",
      components: {PloginSubmit, PloginSection, PloginID, PloginHeader}
    }
</script>

<style scoped>

</style>
