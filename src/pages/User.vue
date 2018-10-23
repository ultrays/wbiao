<template>
    <div>
      <User-header></User-header>
      <User-detals></User-detals>
      <User-order></User-order>
      <User-myservice></User-myservice>
      <User-consult></User-consult>
      <User-footer></User-footer>
    </div>
</template>

<script>
  import UserHeader from "../components/User/User/UserHeader";
  import UserFooter from "../components/User/User/UserFooter";
  import UserDetals from "../components/User/User/UserDetals";
  import UserOrder from "../components/User/User/UserOrder";
  import UserMyservice from "../components/User/User/UserMyservice";
  import UserConsult from "../components/User/User/UserConsult";
  export default {
    name: "User",
    components: {UserConsult, UserMyservice, UserOrder, UserDetals, UserFooter, UserHeader}
  }
</script>

<style scoped>

</style>
