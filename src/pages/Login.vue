<template>
    <div>
      <Login-header></Login-header>
      <Login-section></Login-section>
      <Login-submit></Login-submit>
      <Login-i-d></Login-i-d>
    </div>
</template>

<script>
    import LoginHeader from "../components/User/Login/LoginHeader";
    import LoginID from "../components/User/Login/LoginID";
    import LoginSection from "../components/User/Login/LoginSection";
    import LoginSubmit from "../components/User/Login/LoginSubmit";
    export default {
        name: "Login",
      components: {LoginSubmit, LoginSection, LoginID, LoginHeader}
    }
</script>

<style scoped>

</style>
