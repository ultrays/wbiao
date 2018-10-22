<template>
    <header>
      <h3>购物车</h3>
      <span >编辑全选</span>
      <span style="display: none">&nbsp&nbsp&nbsp完成</span>
    </header>
</template>

<script>
    export default {
        name: "cartsHeader"
    }
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 0.35rem;
    background: white;
    border-bottom: 2px solid #e9e9e9;
    display: flex;
    align-items: center;
    margin-bottom: 0.12rem;
  h3{
    font-size: 0.13rem;
    color: #3b3b3b;
    padding: 0 1.16rem 0 1.74rem;
    font-weight: 900;
  }
  span{
    font-size: 0.09rem;
    color: #4f4f4f;

  }
}
</style>
