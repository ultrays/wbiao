<template>
    <div>
      <footer>
        <input type="text" value="我想问..."/>
        <a href="#"></a>
        <a href="#"></a>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "ServiceFooter"
    }
</script>

<style scoped>
  footer{
    width: 3.65rem;
    height:0.4rem;
    background: #f9f9f9;
    padding: 0.05rem;
    display: -webkit-flex;
    align-items:center;
  }
  footer input{
    width: 2.6rem;
    height: 0.375rem;
    border:none;
    border:2px solid #d4d4d4;
    border-radius: 0.04rem;
    outline:medium;
    color:#757575;
    padding-left:0.1rem;
  }
  footer a:nth-child(3){
    display: block;
    width: 0.31rem;
    height: 0.31rem;
    border-radius: 50%;
    margin-top:0.05rem;
    margin-left:0.1rem;
    background: url(../../../../static/feng/my-img/jia.png) no-repeat left center;
    background-size:0.31rem 0.31rem;
  }
  footer a:nth-child(2){
    display: block;
    width: 0.31rem;
    height: 0.31rem;
    border-radius: 50%;
    margin-top:0.05rem;
    margin-left:0.1rem;
    background: url(../../../../static/feng/my-img/biao.png) no-repeat left center;
    background-size:0.31rem 0.31rem;
  }
</style>
