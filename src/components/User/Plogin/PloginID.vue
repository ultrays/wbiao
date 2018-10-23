<template>
    <div>
      <div class="ID">
        <router-link to="/Fpass">忘记密码?</router-link>
        <router-link to="/Login"><i></i>手机动态码登录?</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PloginID"
    }
</script>

<style scoped>
  .ID{
    width: 100%;
    vertical-align: middle;
    display: flex;
  }
  .ID i{
    display: block;
    float: left;
    width: 0.1rem;
    height: 0.18rem;
    background: url(../../../../static/feng/my-img/phone.png) no-repeat left top;
    background-size: 0.1rem 0.15rem;
    margin-top:0.02rem;
    margin-right:0.05rem;
  }
  .ID a{
    display: block;
    margin:0 0.15rem 0 0.05rem;
    color:#676767;
    font-size: 0.14rem;
  }
  .ID a:nth-child(1){
    margin-right:1.6rem;
    margin-left:0.1rem;
  }
</style>

