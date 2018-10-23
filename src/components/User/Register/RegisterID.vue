<template>
<div>
  <div class="ID">
    <p>遇到问题?你可以联系</p><router-link to="/Service">联系客服</router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "RegisterID"
    }
</script>

<style scoped>
  .ID{
    width: 100%;
    vertical-align: middle;
    padding-left:0.1rem;
  }
  .ID p{
    float: left;
    color:#adadad;
    font-size: 0.14rem;
  }
  .ID a{
    display: block;
    float:left;
    color:#676767;
    font-size: 0.14rem;
    text-decoration:underline;
  }
</style>
