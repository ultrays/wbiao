<template>
    <div>
      <div class="section">
        <li>
          <label>绑定的手机号:</label>
          <input type="text" placeholder="请输入">
        </li>
        <li>
          <label>图形验证码：</label>
          <input type="text" placeholder="请输入">
          <span id="yan">验证码</span>
        </li>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FpassSection"
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
    border-top:none;
  }
  label{
    width: 1.05rem;
    height: 0.44rem;
    float:left;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.14rem;
    color:#3d3d3d;
  }
  label:nth-child(2){
    text-align: center;
  }
  .section li:nth-child(1) input{
    width: 2.7rem;
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
    width: 1.8rem;
    height: 0.44rem;
    border:none;
    float:left;
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
  }
  #yan{
    width: 0.8rem;
    height: 0.44rem;
    float:right;
    padding-right:0.1rem;
    line-height: 0.44rem;
    font-size:0.14rem;
    line-height: 0.44rem;
    text-align: center;
    color:#cccccc;
  }
</style>
