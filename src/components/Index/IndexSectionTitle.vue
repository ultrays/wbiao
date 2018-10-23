<template>
  <div>
    <h3>{{title}}</h3>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: "IndexSectionTitle",
    props:["title"]
  }
</script>

<style lang="scss" scoped>
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .12rem 0 .14rem;
    h3{
      font-size: .16rem;
      font-weight: bold;
      color: #333333;
    }
    span{
      display: block;
      width: .23rem;
      height: .015rem;
      background: #C9A572;
      margin-top: .11rem;
    }
  }
</style>
