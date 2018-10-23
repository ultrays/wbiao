<template>
  <footer>
    <ul class="site">
      <li>资讯</li>
      <li>评测</li>
      <li>生活</li>
      <li>知识</li>
      <li>百科</li>
      <li>鉴赏</li>
    </ul>
    <p class="lastTip">
      电脑版<span class="Tiplist"></span>APP客户端<span class="Tiplist"></span>分享
    </p>
  </footer>
</template>

<script>
    export default {
        name: "infoDetailFooter"
    }
</script>

<style scoped>
  .site{
    width: 100%;
    height: 0.41rem;
    background: #000000;
    display: flex;
  }
  .site li{
    color: #ffffff;
    font-size: 0.17rem;
    letter-spacing: 0.01rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .lastTip{
    padding: 0.15rem 0 0.2rem;
    font-size: 0.16rem;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Tiplist{
    height: 0.16rem;
    width: 1px;
    background: #000000;
    margin: 0 0.2rem;
  }
</style>
