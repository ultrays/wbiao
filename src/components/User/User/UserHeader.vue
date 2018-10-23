<template>
<div>
  <header>
    <div class="header_tit">
      <a href="#"><i class="iconfont icon-setting"></i></a>
    </div>
    <div class="header_con">
      <div class="h-image">
        <router-link to="/Login">
          <i class="iconfont icon-zhucedenglutouxiang"></i>
        </router-link>
      </div>
      <div class="h-func">
        <p id="login"><router-link to="/Login">注册/登录</router-link></p>
        <p id="favourable"><router-link to="/Login">登录享优惠</router-link></p>
      </div>
    </div>
    <div class="header_nav">
      <li><a href="#"><i class="iconfont icon-gerenziliao-"></i>个人资料</a></li>
      <li><a href="#"><i class="iconfont icon-shouhuodizhi"></i>收货地址</a></li>
      <li><a href="#"><i class="iconfont icon-wodeshoucang"></i>我的收藏</a></li>
    </div>
  </header>
</div>
</template>

<script>
    export default {
        name: "UserHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:2.06rem;
    background: url("../../../../static/feng/my-img/member-bg.png") no-repeat left top;
    background-size: cover;
    margin-bottom:0.18rem;
  }
  .header_tit{
    width: 100%;
    height: 0.45rem;
  }
  .header_tit a{
    display: block;
    width:0.43rem;
    height: 0.43rem;
    float:right;
    margin-right:0.03rem;
  }
  .header_tit a i{
    display: block;
    width:0.43rem;
    height: 0.43rem;
  }
  .header_con{
    width: 93%;
    height:0.67rem;
    padding: 0rem 0rem 0.415rem 0.25rem;
  }
  .h-image{
    width:0.64rem;
    height: 0.64rem;
    float:left;
  }
  .h-image i{
    display: block;
    width: 0.64rem;
    height: 0.64rem;
    border-radius: 50%;
    background: #dddddd;
    line-height: 0.58rem;
    text-align: center;
  }
  .h-func{
    height: 0.64rem;
    float:left;
    margin-left:0.2rem;
    color:#fff;
    font-size: 0.12rem;
    vertical-align: top;
    margin-top: 0.18rem;
  }
  .h-func p:nth-child(1){
    font-size:0.16rem;
    line-height: 0.10rem;
    margin-bottom:0.03rem;
  }
  .h-func a{
    overflow: hidden;
    color:#ffffff;
  }
  .h-func p:nth-child(2){
    font-size:0.12rem;
  }
  .header_nav{
    width: 100%;
    height:0.52rem;
  }
  .header_nav li{
    width: 1.23rem;
    height: 0.52rem;
    float:left;
    vertical-align: top;
    font-size: 0.12rem;
    text-align: center;
    border-right:1px solid #404042;
    border-left:1px solid #404042;
    background: black;
    background:rgba(12, 12, 12, 0.6);
  }
  .header_nav li:nth-child(1){
    border-right:1px solid #404042;
    border-left:none;
  }
  .header_nav li:nth-child(3){
    border-right:none;
  }
  .header_nav li a{
    color:#fff;
  }
  .header_nav li i{
    display: block;
    margin-top:0.05rem;
    height: 0.25rem;
    line-height: 0.1rem;
  }
</style>
