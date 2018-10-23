<template>
<div>
  <div class="section">
    <li>
      <input type="text" placeholder="请填写注册手机号">
    </li>
    <li>
      <input type="text" placeholder="如有推荐人，请填写推荐人手机号">
    </li>
  </div>
</div>
</template>

<script>
    export default {
        name: "RegisterSection"
    }
</script>

<style scoped>
  .section{
    width: 100%;
    background: #fff;
    margin-bottom:0.2rem;
  }
  .section li{
    width: 3.75rem;
    height: 0.44rem;
    border-top:2px solid #eeeeee;
    border-bottom:4px solid #dcdcdc;
  }
  .section li:nth-child(2){
    border:none;
  }
  .section li:nth-child(1) input{
    width: 3.1rem;
    height: 0.44rem;
    border:none;
    float:left;
    padding-left:0.1rem;
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
  }
  .section li input{
    outline:none;
  }
  ::-webkit-input-placeholder{color:#cccccc;}
  .section li:nth-child(2) input{
    width: 2.18rem;
    height: 0.44rem;
    border:none;
    float:left;
    padding-left:0.1rem;
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
  }
</style>
