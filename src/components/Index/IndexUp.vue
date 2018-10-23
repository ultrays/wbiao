<template>
  <div>
    <img @click="goUpClick" src="../../../static/shuai/img/index/icon-up.png" alt=""/>
    <img src="../../../static/shuai/img/index/icon-message.png" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "IndexUp",
    methods:{
      goUpClick(){
        this.$emit("goUpClick")
      }
    }
  }
</script>

<style lang="scss" scoped>
  div{
    position: fixed;
    bottom: .7rem;
    right: .1rem;
    z-index: 10;
      img{
        width: .4rem;
        border-radius: 50%;
        box-shadow: 0px 1px 2px gray;
        margin-top: .05rem;
      }
  }
</style>
