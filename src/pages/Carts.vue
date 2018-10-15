<template>
    <div>
      Carts
      <carts-header></carts-header>
      <carts-section></carts-section>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import CartsHeader from "../components/Carts/cartsHeader";
    import CartsSection from "../components/Carts/cartsSection";
    import CartsFooter from "../components/Carts/cartsFooter";
    export default {
        name: "Carts",
      components: {CartsFooter, CartsSection, CartsHeader}
    }
</script>

<style scoped>

</style>
