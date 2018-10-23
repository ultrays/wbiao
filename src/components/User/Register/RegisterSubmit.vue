<template>
<div>
  <div class="submit">
    <input type="submit" value="下一步"/>
  </div>
</div>
</template>

<script>
    export default {
        name: "RegisterSubmit"
    }
</script>

<style scoped>
  .submit{
    width: 3.55rem;
    height: 0.44rem;
    margin:0 auto 0.14rem;

  }
  .submit input{
    display: block;
    width: 3.55rem;
    height: 0.44rem;
    border-radius: 0.09rem;
    line-height: 0.44rem;
    text-align: center;
    color:#fdfdfd;
    font-size: 0.16rem;
    background: #cccccc;
    border:none;
    outline:medium;
  }
</style>
