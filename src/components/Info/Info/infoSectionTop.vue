<template>
    <div class="sectionTop">
      <a href="#" class="sectionTopLeft" v-for="site in sites">
        <img :src="site.imgsrc"/>
        <p class="title">{{site.title}}</p>
        <span class="sort">{{site.sort}}</span>
        <span class="boxaddress">{{site.address}}</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "infoSectionTop",
        props:["sites"],

    }
</script>

<style scoped>
  .sectionTop{
    padding: 0.15rem;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  }
  .sectionTopLeft{
    position: relative;
  }
  .sectionTopLeft img{
    width: 1.69rem;
    height: 0.845rem;
    border-radius: 5px;
  }
  .title{
    font-size: 0.12rem;
    color: #666;
    margin-top: 5px;
    width: 1.68rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .sort{
    font-size: 0.12rem;
    background: #6c6c6c;
    color: #d1af67;
    position:absolute;
    left:0.11rem;
    top:0.03rem;
  }
  .boxaddress{
    font-size: 0.12rem;
    color: #fff;
    position:absolute;
    right:0.11rem;
    top:0.65rem;
  }
</style>
