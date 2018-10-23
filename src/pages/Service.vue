<template>
  <div>
    <Service-header></Service-header>
    <Service-section></Service-section>
    <Service-footer></Service-footer>
  </div>
</template>

<script>
    import ServiceHeader from "../components/User/Service/ServiceHeader";
    import ServiceSection from "../components/User/Service/ServiceSection";
    import ServiceFooter from "../components/User/Service/ServiceFooter";
    export default {
        name: "Service",
      components: {ServiceFooter, ServiceSection, ServiceHeader}
    }
</script>

<style scoped>

</style>
