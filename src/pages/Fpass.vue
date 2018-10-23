<template>
  <div>
    <Fpass-header></Fpass-header>
    <Fpass-section></Fpass-section>
    <Fpass-submit></Fpass-submit>
  </div>
</template>

<script>
    import FpassHeader from "../components/User/Fpass/FpassHeader";
    import FpassSection from "../components/User/Fpass/FpassSection";
    import FpassSubmit from "../components/User/Fpass/FpassSubmit";
    export default {
        name: "Fpass",
      components: {FpassSubmit, FpassSection, FpassHeader}
    }
</script>

<style scoped>

</style>
