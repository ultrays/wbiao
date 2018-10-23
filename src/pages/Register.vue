<template>
  <div>
    <Register-header></Register-header>
    <Register-section></Register-section>
    <Register-protocol></Register-protocol>
    <Register-submit></Register-submit>
    <Register-i-d></Register-i-d>
  </div>
</template>

<script>
    import RegisterHeader from "../components/User/Register/RegisterHeader";
    import RegisterSection from "../components/User/Register/RegisterSection";
    import RegisterProtocol from "../components/User/Register/RegisterProtocol";
    import RegisterSubmit from "../components/User/Register/RegisterSubmit";
    import RegisterID from "../components/User/Register/RegisterID";
    export default {
        name: "Register",
      components: {RegisterID, RegisterSubmit, RegisterProtocol, RegisterSection, RegisterHeader}
    }
</script>

<style scoped>

</style>
