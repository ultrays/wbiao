<template>
  <div class="Swiper_1">
        <div class="swiper-wrapper">
          <!--商品-->
          <div class="swiper-slide"><div class="shangpin" >
            <div class="swiper-container">
              <div class="swiper-wrapper qwqw">
                <div class="swiper-slide www" v-for="swp in sect.swiper"><img :src="swp.imgG" alt=""></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
            <div class="desc">
              <!--描述一-->
              <p class="desc_1">
                <span class="currentMoney">{{sect.price}}</span>
                <span class="pastMoney">{{sect.yuanJ}}</span>
                <a href="#" class="collect">
                  <img class="collection" src="../../../static/peng/collection.jpg" alt="">
                  <span class="collectTxt">收藏</span>
                </a>
              </p>
              <!--描述二-->
              <p class="desc_2">
                <span class="self">自营</span>{{sect.name}}</p>
              <!--描述三-->
              <p class="desc_3">{{sect.xinNeng}}</p>
              <!--描述四-->
              <p class="express">
                <span>顺丰包邮</span>
                <span>销售：{{sect.xiaoShou}}</span>
              </p>
            </div>
            <div class="saleChoose">
              <p class="saleP">
                <b class="titleItem">已选</b>
                <span>{{sect.style}}</span>&nbsp;
              </p>
              <img  class="picHref1 picHrefleft" src="../../../static/peng/threeDot.jpg" alt="">
            </div>
            <div class="saleBox">
              <div class="saleChoose saleChoose01">
                <p class="saleP">
                  <b class="titleItem">促销</b>
                  <span class="discount">满减</span>
                  <span>大牌提前抢！每满1000减100元，上不封顶...</span>
                </p>

                <img  class="picHref1" src="../../../static/peng/threeDot.jpg" alt="">
              </div>
              <div class="saleChoose  saleChoose02">
                <p class="saleP">
                  <b class="titleItem">分期</b>
                  <span>{{sect.fuKuan}}</span>
                </p>

                <img  class="picHref1" src="../../../static/peng/threeDot.jpg" alt="">
              </div>
            </div>
            <!--配送-->
            <div class="expressBox">
              <div class="sendBox">
                <b class="titleItem">配送</b>
                <div class="send">
                  <p class="free">
                    <span class="currSend">有现货</span>
                    <span class="currSend">免运费</span>
                  </p>
                  <p class="timeSend">
                    下单后16:45前支付，预计1-3个工作日内发货，支持货到付款
                  </p>
                </div>
              </div>
              <div class="sendBox">
                <b class="titleItem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <div class="sendIcon">
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>正规发票</span>
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>加一赔三</span>
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>七天包退</span>
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>全球联保</span>
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>免息分期</span>
                  <img src="../../../static/peng/sub.jpg" alt="">
                  <span>正品联保</span>
                  <img src="../../../static/peng/right.jpg" alt="">
                  <span class="experience">实体店体验</span>
                  <img src="../../../static/peng/right.jpg" alt="">
                  <span class="experience">闪电发货</span>
                  <img src="../../../static/peng/right.jpg" alt="">
                  <span class="experience">亲人转送</span>
                </div>
              </div>
            </div>
            <!--人气搭配-->
            <div class="hotFit">
              <p class="hotTitle">
                <b class="titleItem">人气搭配</b>
                <span class="currSend currSendHot">搭配购买更优惠</span>
              </p>
              <p class="imgDesc">
                <img :src="sect.youhui[0].rbimG" alt="" class="w1Img w1Img1">
                <span>+</span>
                <img :src="sect.youhui[1].rbimG" alt="" class="w1Img">
                <span>+</span>
                <span class="more">搭配更多</span>
                <span class="discountMoney">优惠￥50</span>
              </p>
              <p class="linkMoney">
                <span>{{sect.youhui[0].rprice}}</span>
                <span>{{sect.youhui[1].rprice}}</span>
              </p>
            </div>
            <!--评价部分-->
            <div class="declare">
              <div class="declareTitle">
                <span class="claim">评价(651)</span>
                <p class="feedback">
                  <span class="goodTxt">好评</span>
                  <span class="propergation">99%</span>
                  <img  class="picHref1" src="../../../static/peng/threeDot.jpg" alt="">
                </p>

              </div>
              <!--用户评价列表-->
              <ul class="user_ul">
                <li class="user_li"v-for="lis in sect.SPpingjia" :key="lis.id">
                  <div class="user_Ifo" >
                    <p class="user_left">
                      <span class="head"><img class="perIcon" :src="lis.nameimg" alt=""></span>
                      <span class="userName">{{lis.name}}</span>
                      <span class="userCard">银卡会员</span>
                    </p>
                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">{{lis.plconment}}</p>
                  <p class="userImg">
                     <span v-for="im in lis.imgs" :key="im.id">
                        <img :src="im.imgs1" alt="">
                     </span>
                  </p>
                  <p class="userChoose">{{lis.style}}</p>
                </li>
              </ul>
              <p class="allContent">
                <span>全部评价（651）</span>
                <span>咨询客服</span>
              </p>
            </div>
            <!--店铺介绍-->
            <div class="store">
              <!--店铺介绍头部-->
              <div class="storeTitle">
                <p class="shopIconpp">
                  <img class="shopIcon" src="../../../static/peng/shopIcon.jpg" alt="">
                </p>
                <p class="storeIfo">
                  <span class="storeName">法国赫柏林官方旗舰店</span>
                  <span class="storeNum">销量 121593</span>
                </p>
                <span class="shopSelf">自营</span>
              </div>
              <!--店铺数目-->
              <div class="storeNumIcon">
                <p>
                  <span class="number">“389”</span>
                  <span class="numTxt">全部商品</span>
                </p>
                <p>
                  <span class="number">“12601”</span>
                  <span  class="numTxt">关注粉丝数</span>
                </p>
              </div>
              <!--店铺逛逛-->
              <div class="goShop">
                <p>
                  <img src="../../../static/peng/menu.jpg" alt="" class="menu">
                  <span class="shopper">联系商家</span>
                </p>
                <p>
                  <img src="../../../static/peng/gogo.jpg" alt="" class="menu">
                  <span  class="shopper">联系商家</span>
                </p>
              </div>
              <p class="topGoP">
                <img class="topGo" src="../../../static/peng/topGo.jpg" alt="">
                上拉查看详情

              </p>
            </div>
          </div></div>
          <!--详情-->
          <div class="swiper-slide"><div class="xiangqing" >
            <p class="para">
              <span>商品介绍</span>
              <span>规格参数</span>
              <span>售后服务</span>
            </p>
            <div class="remind">
              商品展示区划去的价格为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买!
            </div>
            <div class="reminder">
              <img src="../../../static/peng/reminder01.jpg" alt="">
              <img src="../../../static/peng/pic01.jpg" alt="">
              <img src="../../../static/peng/reminder03.jpg" alt="">
              <img src="../../../static/peng/reminder04.jpg" alt="">
              <img src="../../../static/peng/reminder05.jpg" alt="">
              <img src="../../../static/peng/reminder06.jpg" alt="">
              <img src="../../../static/peng/reminder07.jpg" alt="">
              <img src="../../../static/peng/reminder08.jpg" alt="">
              <img src="../../../static/peng/reminder09.jpg" alt="">
              <img src="../../../static/peng/reminder10.jpg" alt="">
              <img src="../../../static/peng/reminder10.jpg" alt="">
              <img src="../../../static/peng/reminder12.jpg" alt="">
              <img src="../../../static/peng/reminder13.jpg" alt="">
              <img src="../../../static/peng/reminder14.jpg" alt="">
              <img src="../../../static/peng/reminder15.jpg" alt="">
              <img src="../../../static/peng/reminder16.jpg" alt="">
              <img src="../../../static/peng/reminder17.jpg" alt="">
            </div>
          </div></div>
          <!--评价-->
          <div class="swiper-slide"><div class="pingjia" >
            <p class="para">
              <span>全部（652）</span>
              <span>有图（30）</span>
            </p>
            <div class="connBox">
              <ul class="user_ul">
                <li class="user_li"v-for="lib in sect.ZpinJia" :key="lib.id">
                  <div class="user_Ifo" >
                    <p class="user_left">
                      <span class="head"><img class="perIcon" :src="lib.nameimg" alt=""></span>
                      <span class="userName">{{lib.name}}</span>
                      <span class="userCard">银卡会员</span>
                    </p>
                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">{{lib.plconment}}</p>
                  <p class="userImg">
                     <span v-for="im in lib.imgs" :key="im.id">
                        <img :src="im.imgs1" alt="">
                     </span>
                  </p>
                  <p class="userChoose">{{lib.style}}</p>
                </li>
                <li class="user_li">
                  <div class="user_Ifo">
                    <p class="user_left">
                      <span class="head"><img class="perIcon" src="../../../static/peng/perIcon.jpg" alt=""></span>
                      <span class="userName">云端的风</span>
                      <span class="userCard">银卡会员</span>
                    </p>

                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">
                    表非常漂亮，比想象中***还要好，表盘略小正好适合偏瘦***人***
                  </p>
                  <p class="userImg">
        <span>
        <img src="../../../static/peng/perpic03.jpg" alt="">
        </span>
                    <span>
        <img src="../../../static/peng/perpic04.jpg" alt="">
        </span>
                  </p>
                  <p class="userChoose">
                    真皮；&nbsp;白色&nbsp;共两张图
                  </p>
                </li>
                <li class="user_li">
                  <div class="user_Ifo">
                    <p class="user_left">
                      <span class="head"><img class="perIcon" src="../../../static/peng/perIcon.jpg" alt=""></span>
                      <span class="userName">云端的风</span>
                      <span class="userCard">银卡会员</span>
                    </p>

                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">
                    东西不错，是正品。就是表盘小了点，不过还好，我的胳膊不粗，带上还可以！
                  </p>
                  <p class="userImg">
        <span>
        <img src="../../../static/peng/perpic05.jpg" alt="">
        </span>
                    <span>
        <img src="../../../static/peng/perpic06.jpg" alt="">
        </span>
                  </p>
                  <p class="userChoose">
                    真皮；&nbsp;白色&nbsp;共两张图
                  </p>
                </li>
                <li class="user_li">
                  <div class="user_Ifo">
                    <p class="user_left">
                      <span class="head"><img class="perIcon" src="../../../static/peng/perIcon.jpg" alt=""></span>
                      <span class="userName">云端的风</span>
                      <span class="userCard">银卡会员</span>
                    </p>

                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">
                    非常漂亮，很喜欢，已经戴了两年多了。
                  </p>
                  <p class="userImg">
        <span>
        <img src="../../../static/peng/perpic.jpg" alt="">
        </span>
                    <span>
        <img src="../../../static/peng/perpic02.jpg" alt="">
        </span>
                  </p>
                  <p class="userChoose">
                    真皮；&nbsp;白色&nbsp;共两张图
                  </p>
                </li>
                <li class="user_li">
                  <div class="user_Ifo">
                    <p class="user_left">
                      <span class="head"><img class="perIcon" src="../../../static/peng/perIcon.jpg" alt=""></span>
                      <span class="userName">云端的风</span>
                      <span class="userCard">银卡会员</span>
                    </p>

                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">
                    表非常漂亮，比想象中***还要好，表盘略小正好适合偏瘦***人***
                  </p>
                  <p class="userImg">
        <span>
        <img src="../../../static/peng/perpic03.jpg" alt="">
        </span>
                    <span>
        <img src="../../../static/peng/perpic04.jpg" alt="">
        </span>
                  </p>
                  <p class="userChoose">
                    真皮；&nbsp;白色&nbsp;共两张图
                  </p>
                </li>
                <li class="user_li">
                  <div class="user_Ifo">
                    <p class="user_left">
                      <span class="head"><img class="perIcon" src="../../../static/peng/perIcon.jpg" alt=""></span>
                      <span class="userName">云端的风</span>
                      <span class="userCard">银卡会员</span>
                    </p>

                    <img class="starIcon" src="../../../static/peng/lightStar.jpg" alt="">
                  </div>
                  <p class="userDesc">
                    东西不错，是正品。就是表盘小了点，不过还好，我的胳膊不粗，带上还可以！
                  </p>
                  <p class="userImg">
        <span>
        <img src="../../../static/peng/perpic05.jpg" alt="">
        </span>
                    <span>
        <img src="../../../static/peng/perpic06.jpg" alt="">
        </span>
                  </p>
                  <p class="userChoose">
                    真皮；&nbsp;白色&nbsp;共两张图
                  </p>
                </li>
              </ul>
            </div>
          </div></div>
          <!--门面-->
          <div class="swiper-slide"><div class="menmian" >
          <p class="para">
            <span>体验门店</span>
            <span>名匠名店</span>
          </p>
          <div class="imgStore">
            <img src="../../../static/peng/store01.png" alt="" class="store01">
            <ul class="storePic">
              <li class="storePic_li">
                <img  class="storePic_li_img" src="../../../static/peng/store02.jpg" alt="">
                <p class="information">
                  <a href="" class="placeBox">
                    <span class="place">万表全球名表体验中心-广州总部</span>
                    <span class="placeIfo">广东广州番禺区广州市番禺区大石街番禺大道北60-1号</span>
                  </a>
                  <a href="" class="phoneBox">
                    <img src="../../../static/peng/phone.png" alt="" class="phone">

                  </a>
                </p>
              </li>
              <li class="storePic_li">
                <img  class="storePic_li_img" src="../../../static/peng/store03.jpg" alt="">
                <p class="information">
                  <a href="" class="placeBox">
                    <span class="place">万表城市体验店-重庆</span>
                    <span class="placeIfo">重庆重庆渝中区渝中区邹容路50号半岛国际25楼</span>
                  </a>
                  <a href="" class="phoneBox">
                    <img src="../../../static/peng/phone.png" alt="" class="phone">

                  </a>
                </p>
              </li>
              <li class="storePic_li">
                <img  class="storePic_li_img" src="../../../static/peng/store04.jpg" alt="">
                <p class="information">
                  <a href="" class="placeBox">
                    <span class="place">万表城市体验店-福州</span>
                    <span class="placeIfo">福建福州福建省福州市台江区江滨西大道100号融侨中心2层2015-1 店</span>
                  </a>
                  <a href="" class="phoneBox">
                    <img src="../../../static/peng/phone.png" alt="" class="phone">

                  </a>
                </p>
              </li>
              <li class="storePic_li">
                <img  class="storePic_li_img" src="../../../static/peng/store05.jpg" alt="">
                <p class="information">
                  <a href="" class="placeBox">
                    <span class="place">万表城市体验店-宝鸡</span>
                    <span class="placeIfo">陕西宝鸡渭滨区陕西宝鸡渭滨区 高新区零号路万表全球名表体验中心（原十三行）</span>
                  </a>
                  <a href="" class="phoneBox">
                    <img src="../../../static/peng/phone.png" alt="" class="phone">

                  </a>
                </p>
              </li>
              <li class="storePic_li">
                <img  class="storePic_li_img" src="../../../static/peng/store06.jpg" alt="">
                <p class="information">
                  <a href="" class="placeBox">
                    <span class="place">万表城市体验店-南京</span>
                    <span class="placeIfo">江苏南京秦淮区江苏省南京市秦淮区淮海路2-2临（中央商城1号门对面）</span>
                  </a>
                  <a href="" class="phoneBox">
                    <img src="../../../static/peng/phone.png" alt="" class="phone">

                  </a>
                </p>
              </li>
            </ul>
            <p class="loadMore">查看更多
              <img src="../../../static/peng/rightGo.jpg" alt="" class="rightGo">
            </p>
          </div>
          </div></div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="FYQ_1"></div>
  </div>

</template>

<script>
  import $ from "jquery"
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
    export default {
        name: "ProductDetailSection",

            props:["sect"],

      created(){
          console.log($("#id")),
            function addprice(){
              let sum = 0;
              let price = 0;
              for(let i = 0; i<$(".centerone").length ; i++){
                if($(".rad")[i].checked){
                  price+=parseFloat($(".prce")[i].innerHTML)*parseFloat($(".click")[i].innerHTML);
                  sum+=parseFloat($(".click")[i].innerHTML);
                }
              }
              $(".zjzz")[0].innerHTML=price;
              $(".congjia")[0].innerHTML=sum;
            }
      },
      mounted(){
        var mySwiper1 = new Swiper ('.Swiper_1', {
          speed:300,
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.FYQ_1',
            clickable: true,

            renderBullet: function (index, className) {
              if(index=='0'){
                return '<span style="display: table;border-radius: 0;  background:none; width:0.29rem;height:0.15rem;font-size: 0.14rem;color: #000;" class="' + className + '">' + "商品" + '</span>';
              }else if(index=='1'){
                return '<span style="display: table;border-radius: 0; background: none; width:0.29rem;height:0.15rem;font-size: 0.14rem;color: #000;" class="' + className + '">' + "详情" + '</span>';
              }else if(index=='2'){
                return '<span style="display: table;border-radius: 0;background: none; width:0.29rem;height:0.15rem;font-size: 0.14rem;color: #000;" class="' + className + '">' + "评价" + '</span>';
              }else{
                return '<span style="display: table;border-radius: 0;background: none; width:0.29rem;height:0.15rem;font-size: 0.14rem;color: #000;" class="' + className + '">' + "门面" + '</span>';
              }
            },
          }
        })


        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span style="width:0.15rem;margin: 0px 1px;height:0.02rem; border-radius: 5px" class="' + className + '">' + '</span>';
            }
          },
        })
      },


    }

</script>

<style scoped>
  /*section部分*/
  .shangpin{
    width: 100%;
    height: 100%;
  }
  .xiangqing{
    width: 100%;
    height: 100%;
  }
  .pingjia{
    width: 100%;
    height: 100%;
  }
  .menmian{
    width: 100%;
    height: 100%;
  }
  section{
    height:100%;
  }
  /*轮播图*/
  .swiper-container{
    height:3.9rem;
    background: white;
  }
  .qwqw{
    width: 3.5rem;
    height:3.5rem;
    padding: 0.1rem;
    box-sizing: border-box;
  }
  .www img{
    width: 3.5rem;
    height:3.5rem;
  }
  .swiper-pagination{
    bottom:-15px;
  }
  .desc{
    width:100%;
    box-sizing: border-box;
    padding:0 .11rem;
    background: #fff;
  }
  .desc_1{
    /*width:100%;*/
    display: -webkit-flex;
    align-items: center;
    margin-top:.03rem;
  }
  .currentMoney{
    font-size:.24rem;
    color:#d90000;
    font-weight:600;
  }
  .pastMoney{
    font-size:.14rem;
    color:#c9c9c9;
    text-decoration: line-through;
    margin-left:.1rem;
  }
  .collect{
    width:.4rem;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:1.8rem;
  }
  .collection{
    width:.12rem;
    height:.12rem;
  }
  .collectTxt{
    font-size:.12rem;
    color:#c9c9c9;
    text-decoration: line-through;
    /*display: -webkit-flex;*/
  }
  .desc_2{
    font-size:.14rem;
    color:#535353;
    font-weight:600;
    /*display: -webkit-flex;*/
    /*align-items: flex-start;*/
    /*line-height: .21rem;*/
    text-align: left;
  }
  .self{
    display: inline-block;
    width:.3rem;
    height:.16rem;
    background: #d90000;
    -webkit-border-radius: 20%;
    -moz-border-radius: 20%;
    border-radius: 20%;
    font-size:.1rem;
    color:#fff;
    text-align:center;
    line-height: .14rem;
    margin-bottom:.07rem;
  }
  .desc_3{
    font-size:.12rem;
    color:#565656;
    line-height: .2rem;
  }
  .express{
    font-size:.14rem;
    color:#c4c4c4;
    line-height: .25rem;
    /*margin-top:.05rem;*/
    display: -webkit-flex;
    justify-content: space-between;
  }
  .saleChoose{
    /*width:100%;*/
    padding:0 .11rem 0 .11rem;
    font-size:.14rem;
    line-height: .4rem;
    margin:.12rem  0;
    display: -webkit-flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    box-sizing: border-box;
  }
  .saleP{
    display: -webkit-flex;
    align-items: center;
  }
  .saleChoose span,.currSend{
    display: -webkit-flex;
    color:#2b2b2b;
    font-weight:600;
    font-size:.14rem;
  }
  .titleItem{
    font-size:.12rem;
    margin-right:.1rem;
    color:#606060;
    font-weight:100;
  }
  .picHrefleft{
    margin-left:1.4rem;
  }
  .saleChoose01 span{
    font-size:.1rem;
  }
  .saleChoose01 .discount{
    color:#db1010;
    width:.23rem;
    height:.16rem;
    /*border:1px solid #db1010;*/
    border-radius:40%;
    display:-webkit-flex;
    justify-content: center;
    align-items: center;
    margin-right:.07rem;
  }
  .saleBox .saleChoose01{
    margin-bottom:0.12rem;
  }
  .saleChoose02{
    border:1px solid #f5f5f5;
    margin-top:0rem;
  }
  .sendBox{
    width:100%;
    box-sizing: border-box;
    padding:.1rem .11rem;
    display: -webkit-flex;
    border-bottom:1px solid #f4f4f4;
  }
  .timeSend{
    font-size:.1rem;
    color:#8f8f8f;
  }
  .sendBox{
    background: #fff;
  }
  .free{
    display: -webkit-flex;
    margin-bottom: .1rem;
  }
  .free .currSend:first-child{
    margin-right:.14rem;
    color:#d40000;
  }
  .sendIcon{
    display: -webkit-flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .sendIcon{
    font-size:.1rem;
    color:#cacaca;
    line-height: .2rem;
  }
  .sendIcon img{
    width:.12rem;
    height:.12rem;
    margin-left:.07rem;
    margin-right:.04rem;
  }
  .sendIcon  img:nth-of-type(1){
    margin-left:0rem;
  }
  .sendIcon img:nth-of-type(6){
    margin-left:0rem;
  }
  .experience{
    color:#8d8d8d;
  }
  .hotFit{
    padding:.12rem .1rem;
    margin-top:.12rem;
    margin-bottom:.12rem;
    background: #fff;
  }
  .hotTitle{
    display: -webkit-flex;
    align-items: flex-end;
  }
  .currSendHot{
    color:#ceac7d;
  }
  .imgDesc{
    font-size:.12rem;
    display: -webkit-flex;
    align-items: center;
    margin-top: .14rem;
    position: relative;
  }
  .w1Img{
    width:.8rem;
    height:.8rem;
    border:2px solid #f2f2f2;
    margin:0 .15rem;
  }
  .w1Img1{
    margin-left:0;
  }
  .more{
    height:.13rem;
    width:.59rem;
    display: block;
    padding:.07rem .04rem;
    border:1px solid #9c9c9c;
    text-align:center;
    line-height: .15rem;
    margin-left:.15rem;
  }
  .discountMoney{
    display: block;
    width:.8rem;
    height:.15rem;
    font-size:.12rem;
    line-height: .15rem;
    color:#fff;
    background: #ccaa7a;
    position: absolute;
    top:.7rem;
    left:1.25rem;
    text-align:center;
  }
  .linkMoney{
    font-size:.12rem;
    color:#525252;
    position: relative;
    margin-top:.11rem;
  }
  .linkMoney span:first-child{
    margin-left:.19rem;
  }
  .linkMoney span:last-child{
    margin-left:.9rem;
  }
  .declare{
    background: #fff;
    width:100%;
    box-sizing: border-box;
    padding:.12rem .1rem;
    margin-bottom:.12rem;
  }
  .declareTitle{
    line-height: .33rem;
    font-size:.14rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #f6f6f6;
  }
  .feedback{
    display: -webkit-flex;
    align-items: center;
  }
  .goodTxt{
    font-weight:600;
    margin-right:.08rem;
  }
  .propergation{
    font-weight:600;
    margin-right:.08rem;
    color:#d80000;
  }
  .user_ul{
    width:100%;
  }
  .user_li{
    /*width:100%;*/
    border-bottom:1px solid #f4f4f4;
    padding-top:.04rem;

  }
  .user_Ifo{
    display: -webkit-flex;
    height:.24rem;
    justify-content: space-between;
    align-items: center;
  }
  .user_left{
    display: -webkit-flex;
    align-items: center;

  }
  .head{
    width:.24rem;
    height:.24rem;
    border-radius:50%;
    background: #008842;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin-right:.08rem;
  }
  .perIcon{
    width:.24rem;
    height:.24rem;
    border-radius:50%;
  }
  .userName{
    font-size:.12rem;
    color:#959595;
    margin-right:.08rem;
  }
  .userCard{
    display: block;
    width:.53rem;
    height: .16rem;
    text-align: center;
    font-size:.12rem;
    color:#fff;
    background: #cacaca;
    border-radius: 10%;
  }
  .starIcon{
    width:.42rem;
    height:.07rem;
  }
  .userDesc{
    padding:.05rem 0;
    font-size:.12rem;
    color:#373737;
    margin-bottom: .07rem;
  }
  .userImg{
    display: -webkit-flex;
  }
  .userImg span{
    display: block;
    width:1.15rem;
    height:1.15rem;
    border:1px solid #e3e3e3;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin-right:.1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left:.03rem;
  }
  .userImg img{
    width:1.09rem;
    height:1.09rem;
  }
  .userChoose{
    margin-top:.18rem;
    margin-bottom:.1rem;
    font-size:.1rem;
    color:#a3a3a3;
  }
  .allContent{
    padding-top:.15rem;
    padding-bottom:.11rem;
    font-size:.14rem;
    color:#666666;
    display:-webkit-flex;
    justify-content: space-around;
  }
  /*店铺介绍*/
  .store{
    background: #fff;
    width:100%;
    box-sizing: border-box;
    padding:.12rem .1rem;
    margin-bottom:.12rem;
    border-bottom: 1px solid #f3f3f3;

  }
  .storeTitle{
    padding-bottom:.1rem;
    border-bottom:1px solid #f4f4f4;
    display: -webkit-flex;
  }
  .shopIconpp{
    width:.5rem;
    height:.5rem;
    border-radius: 50%;
    border:1px solid #dedede;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin-right: .09rem;
  }
  .shopIcon{
    width:.5rem;
    height:.5rem;
  }
  .storeIfo{
    display: -webkit-flex;
    flex-direction: column;
  }
  .storeName{
    font-size:.14rem;
    color:#333;
    margin:.08rem 0 .03rem 0;
  }
  .storeNum{
    font-size:.1rem;
    color:#9f9f9f;
  }
  .shopSelf{
    display: block;
    width:.27rem;
    height:.2rem;
    color:#dc1d1d;
    font-size:.12rem;
    border:1px solid #dfdfdf;
    background: #f2f2f2;
    border-radius: 40%;
    text-align: center;
    margin:.08rem 0 .03rem .05rem;
  }
  .storeNumIcon{
    padding:.2rem 0  .16rem 0;
    display: -webkit-flex;
    justify-content: space-around;
    border-bottom: 1px solid #f3f3f3;
  }
  .storeNumIcon p{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .number{
    font-size:.22rem;
    font-weight:600;
    color:#ccb97a;
  }
  .numTxt{
    font-size:.14rem;
    color:#acacac;
    margin-top:.04rem;
  }
  /*.  <!--店铺逛逛-->*/
  .goShop{
    padding-top:.2rem;
    display: -webkit-flex;
    align-self: center;
    justify-content: space-around;
  }
  .goShop p{
    display: -webkit-flex;
    align-items: center;
  }
  .menu{
    width:.15rem;
    height:.12rem;
    margin-right:.1rem;
  }
  .shopper{
    font-size:.12rem;
    color:#666666;
  }
  .topGoP{
    padding-top:.37rem;
    font-size:.12rem;
    color:#666666;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .topGo{
    width:.11rem;
    height:.14rem;
    margin-right:.11rem;

  }
  .picHref1{
    width: 0.2rem;
  }
  .remind{
    width:3.35rem;
    height:.5rem;
    background: #f1f1f1;
    font-size:.1rem;
    color:#9b9b9b;
    margin:.2rem auto;
    box-sizing: border-box;
    padding:.08rem;
    border-radius: 5px;
  }
  .reminder{
    width:100%;
  }
  .reminder img{
    width:100%;
  }
  .connBox{
    padding:.12rem .1rem;
    box-sizing: border-box;
  }
  .imgStore{
    width:100%;
  }
  .store01{
    width:100%;
  }
  .storePic{
    width:100%;
    box-sizing: border-box;
    padding:.2rem;
  }
  .storePic_li{

  }
  .storePic_li_img{
    width:100%;
  }
  .information{
    display: -webkit-flex;
    padding:.16rem 0;
  }
  .placeBox{
    display: block;
    border-right:1px solid #dddddd;
    width:86%;
    display: -webkit-flex;
    flex-direction: column;
  }
  .place{
    font-size:.14rem;
    color:#333333;
    font-weight:600;
    line-height: .14rem;
  }
  .placeIfo{
    font-size:.12rem;
    color:#acacac;
    width:83%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .25rem;
  }
  .phoneBox{
    flex:1;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .phone{
    width:.36rem;
    height:.36rem;
  }
  .loadMore{
    padding-bottom:.12rem;
    font-size:.12rem;
    color:#868686;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .rightGo{
    width:.05rem;
    height:.05rem;
    margin-left:.05rem;
  }
  .para{
    background: #fff;
    height:.37rem;
    font-size:.12rem;
    color:#777777;
    line-height: .37rem;
    display: -webkit-flex;
    justify-content: space-around;
    border:1px solid #e3e3e3;
    font-weight:600;
  }
  /*轮播图*/
  body{
    position: relative;
  }
  .FYQ_1{
    position: absolute;
    top: 0.04rem;
    left: 0.75rem;
    z-index: 1;
    flex: 1;
    width: 2.3rem;
    height: 0.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    text-align: center;
  }
  footer{
    width:100%;
    height:.5rem;
    background: #fff;
    display: -webkit-flex;
    margin-bottom:0;
  }
  .cartsLeft{
    width:39%;
    border-right:2px solid #f6f6f6;
    display: -webkit-flex;
    padding-top:.09rem;
    padding-bottom: .5rem;
  }
  .cartsLeft a{
    width:33.33%;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column;
    font-size:.1rem;
    color:#787878;
  }
  .cartsLeft a img{
    width:.18rem;
    height:.18rem;
    margin-bottom: .05rem;
  }
  .cartsMiddle{
    width:29%;
    line-height: .5rem;
    text-align:center;
    font-size: .14rem;
    color:#595959;
  }
  .cartsRight{
    flex:1;
    background: #d90000;
    color:#fff;
    line-height: .5rem;
    text-align:center;
    font-size: .14rem;
  }
  .para{
    background: #fff;
    height:.37rem;
    font-size:.12rem;
    color:#777777;
    line-height: .37rem;
    display: -webkit-flex;
    justify-content: space-around;
    border:1px solid #e3e3e3;
    font-weight:600;
  }
  .para span:first-child{
    color:#da0a0a;
  }
  .remind{
    width:3.35rem;
    height:.5rem;
    background: #f1f1f1;
    font-size:.1rem;
    color:#9b9b9b;
    margin:.2rem auto;
    box-sizing: border-box;
    padding:.08rem;
    border-radius: 5px;
  }
  .reminder{
    width:100%;
  }
  .reminder img{
    width:100%;
  }
  .connBox{
    padding:.12rem .1rem;
  }
  .imgStore{
    width:100%;
  }
  .store01{
    width:100%;
  }
  .storePic{
    width:100%;
    box-sizing: border-box;
    padding:.2rem;
  }
  .storePic_li{

  }
  .storePic_li_img{
    width:100%;
  }
  .information{
    display: -webkit-flex;
    padding:.16rem 0;
  }
  .placeBox{
    display: block;
    border-right:1px solid #dddddd;
    width:86%;
    display: -webkit-flex;
    flex-direction: column;
  }
  .place{
    font-size:.14rem;
    color:#333333;
    font-weight:600;
    line-height: .14rem;
  }
  .placeIfo{
    font-size:.12rem;
    color:#acacac;
    width:83%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .25rem;
  }
  .phoneBox{
    flex:1;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .phone{
    width:.36rem;
    height:.36rem;
  }
  .loadMore{
    padding-bottom:.12rem;
    font-size:.12rem;
    color:#868686;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .rightGo{
    width:.05rem;
    height:.05rem;
    margin-left:.05rem;
  }
</style>
