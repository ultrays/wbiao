<template>
    <div>
      <carts-header></carts-header>
      <carts-section></carts-section>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
    import CartsHeader from "../components/cartsHeader";
    import CartsSection from "../components/cartsSection";
    import CartsFooter from "../components/cartsFooter";
    export default {
        name: "Carts",
      components: {CartsFooter, CartsSection, CartsHeader}
    }
</script>

<style scoped>

</style>
