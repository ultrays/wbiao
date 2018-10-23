<template>
  <footer>
    <router-link :to="item.url" v-for="(item,index) in items" :key="index">
      <a @click="activeItem(index)" href="javascript:;">
        <img :src="item.isActived?item.imgActived:item.img" alt=""/>
        <span>{{item.name}}</span>
      </a>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: "UserFooter",
    data(){
      return{
        items:[
          {
            url:"/",
            img:"../../../static/feng/footer/footer-index.jpg",
            imgActived:"../../../static/feng/footer/footer-index-active.jpg",
            name:"首页",
            isActived:false
          },
          {
            url:"/sort",
            img:"../../../static/feng/footer/footer-sort.jpg",
            imgActived:"../../../static/feng/footer/footer-sort-active.jpg",
            name:"分类",
            isActived:false
          },
          {
            url:"/info",
            img:"../../../static/feng/footer/footer-info.jpg",
            imgActived:"../../../static/feng/footer/footer-info-active.jpg",
            name:"资讯",
            isActived:false
          },
          {
            url:"/carts",
            img:"../../../static/feng/footer/footer-carts.jpg",
            imgActived:"../../../static/feng/footer/footer-carts-active.jpg",
            name:"购物车",
            isActived:false
          },
          {
            url:"/user",
            img:"../../../static/feng/footer/footer-user.jpg",
            imgActived:"../../../static/feng/footer/footer-user-active.jpg",
            name:"我的",
            isActived:true
          },
        ]
      }
    },
    methods:{
      activeItem(footer){
        // this.items.forEach((item,index)=>{
        //   item.isActived=false;
        // });
        this.items.map((item,footer)=>{
          item.isActived=false;
        });
        this.items[footer].isActived=true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer{
    width:100%;
    position: fixed;
    height:.47rem;
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    bottom:0;
    background: #fff;
    border-top: 1px solid #f1f1f1;
    a{
      font-size:.09rem;
      color:#454545;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      img{
        width:.22rem;
        height:.22rem;
        margin-bottom:.04rem;
      }
    }
  }
</style>
