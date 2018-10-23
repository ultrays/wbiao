<template>
<div>
  <div class="section">
    <li>
      <label>手机号</label>
      <input type="text" placeholder="请输入手机号">
    </li>
    <li>
      <label>图形码</label>
      <input type="text" placeholder="请输入图形验证码">
      <span id="tMa">图形码</span>
    </li>
    <li>
      <label>验证码</label>
      <input type="text" placeholder="请输入短信证码">
      <span id="yMa">发送验证码</span>
    </li>
  </div>
</div>
</template>

<script>
    export default {
        name: "LoginSection"
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
    border-bottom:2px solid #eeeeee;
  }
  .section li:nth-child(2){
    border:none;
  }
  label{
    width: 0.65rem;
    height: 0.44rem;
    float:left;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.14rem;
    color:#3d3d3d;
  }
  .section li:nth-child(1) input{
    width: 3.1rem;
    height: 0.44rem;
    border:none;
    float:left;
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
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
    /* color:;     */
  }
  #tMa{
    width: 0.9rem;
    height: 0.44rem;
    float:right;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.12rem;
  }
  .section li:nth-child(3) input{
    width: 2.18rem;
    height: 0.44rem;
    float:left;
    border:none;
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
    /* color:#e9e9e9; */
  }
  #yMa{
    width: 0.9rem;
    height: 0.44rem;
    float:right;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.12rem;
    color:#999999;
    border-left:2px solid #eeeeee;
  }
</style>
