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
    name: "IndexFooter",
    data(){
      return{
        items:[
          {
            url:"/",
            img:"../../../static/peng/footer-index.jpg",
            imgActived:"../../../static/peng/footer-index-active.jpg",
            name:"首页",
            isActived:false
          },
          {
            url:"/sort",
            img:"../../../static/peng/footer-sort.jpg",
            imgActived:"../../../static/peng/footer-sort-active.jpg",
            name:"分类",
            isActived:false
          },
          {
            url:"/info",
            img:"../../../static/peng/footer-info.jpg",
            imgActived:"../../../static/peng/footer-info-active.jpg",
            name:"资讯",
            isActived:false
          },
          {
            url:"/carts",
            img:"../../../static/peng/footer-carts.jpg",
            imgActived:"../../../static/peng/footer-carts-active.jpg",
            name:"购物车",
            isActived:true
          },
          {
            url:"/user",
            img:"../../../static/peng/footer-user.jpg",
            imgActived:"../../../static/peng/footer-user-active.jpg",
            name:"我的",
            isActived:false
          },
        ]
      }
    },
    methods:{
      activeItem(index){
        // this.items.forEach((item,index)=>{
        //   item.isActived=false;
        // });
        this.items.map((item,index)=>{
          item.isActived=false;
        });
        this.items[index].isActived=true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer{
    height:.47rem;
    display: -webkit-flex;
    background: #fff;
    justify-content: space-around;
    align-items: center;
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
