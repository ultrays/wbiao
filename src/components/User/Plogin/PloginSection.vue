<template>
    <div>
      <div class="section">
        <li>
          <label>账号</label>
          <input type="text" placeholder="手机号/会员号/邮箱">
        </li>
        <li>
          <label>密码</label>
          <input type="text" placeholder="请输入密码">
          <span id="yan"></span>
        </li>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PloginSection"
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
    width: 2.68rem;
    height: 0.44rem;
    border:none;
    float:left;
    line-height: 0.44rem;
    text-align: left;
    font-size: 0.14rem;
    /* color:;     */
  }
  #yan{
    width: 0.3rem;
    height: 0.44rem;
    float:right;
    padding-right:0.1rem;
    line-height: 0.44rem;
    background: url(../../../../static/feng/my-img/yan.png) no-repeat center center;
    background-size: 0.16rem 0.12rem;
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
</style>
