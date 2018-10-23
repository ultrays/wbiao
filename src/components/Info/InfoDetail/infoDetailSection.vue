<template>
  <section>
      <div class="sectionTop">
        <div class="titlebox">
          <h3>{{detailData.sites.sectionTop.title}}</h3>
          <p class="tips">
            <span class="time">{{detailData.sites.sectionTop.zhujie.time}}</span>
            <span class="origin">{{detailData.sites.sectionTop.zhujie.origin}}</span>
            <span class="author">{{detailData.sites.sectionTop.zhujie.author}}</span>
          </p>
          <p class="synopsis">{{detailData.sites.sectionTop.synopsis}}</p>
        </div>
        <div class="news" v-for="textbody in detailData.sites.textpage">
          <p class="newsTop" v-for="page in textbody.page">
            <span>{{page.forbold}}</span>{{page.pageOne}}
          </p>
          <div class="imgbox" v-for="img in textbody.imgs">
            <img :src="img"/>
          </div>
        </div>
        <div class="news">
          <p class="newsTop" v-for="pagefoot in detailData.sites.pagefooter">
            <span class="newstrong">{{pagefoot.forbold}}</span><br/>{{pagefoot.pageOne}}
          </p>
        </div>
        <div>
          <div class="newsTop imgbox nextNav">
            {{detailData.nextTitle}}
          </div>
          <div class="sharebox">
            <span>分享:</span>
            <p class="shareIco">
              <img src="../../../../static/dan/image/weibo.png"/>
              <img src="../../../../static/dan/image/qzone.png"/>
              <img src="../../../../static/dan/image/tweibo.png"/>
            </p>
          </div>
        </div>
       </div>
      <h3 class="infotitle">{{detailData.ulData.title}}</h3>
      <ul class="infoDetail" v-for="liD in detailData.ulData.liData">
        <li>{{liD}}</li>
      </ul>

  </section>
</template>

<script>
    export default {
        name: "infoDetailSection",
        props:["detailData"]
     }
</script>

<style scoped>
  .sectionTop{
    width: 100%;
    padding: 0.1rem;
    padding-left: 0.12rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family:  Helvetica,HelveticaNeue,Arial,'Heiti SC','\9ED1\4F53',DroidSansFallback,'Droid Sans',sans-serif;
  }
  .titlebox{
    margin-bottom: 0.3rem;
  }
  .titlebox h3{
    font-size: 0.2rem;
    color: #333333;
    font-weight: 900;
    line-height: 0.28rem;
    margin-top: 0.05rem;
    margin-bottom: 0.15rem;
    letter-spacing: 0.015rem

  }
  .tips{
    margin-top: 0.1rem;
    display: flex;
    align-items: center;

  }
  .tips span{
    font-size: 0.1rem;
    color: #333333;
  }
  .tips .origin{
    color: #278dfd;
    margin:0 0.3rem;
  }
  .synopsis{
    font-size: 0.18rem;
    color: #000000;
    line-height: 0.3rem;
    font-style: italic;
    margin-top: 0.2rem;
    letter-spacing: 0.015rem;
  }
  .newsTop span{
    font-size: 0.18rem;
    color: #000000;
    font-weight: bold;
    letter-spacing: 0.015rem;
  }
  .newsTop{
    font-size: 0.18rem;
    color: #000000;
    line-height: 0.3rem;
    letter-spacing: 0.015rem;
  }
  .imgbox{
    margin: 0.25rem 0;
  }
  .imgbox img{
    width: 100%;
  }
  .nextNav{
      text-indent: 0.2rem;
      background: #eeeeee;
      font-size: 0.17rem;
      height: 0.36rem;
    line-height: 0.36rem;
  }
  .sharebox{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 0.25rem;
  }
  .sharebox span{
    font-size: 0.14rem;
    color: #999999;
  }
  .shareIco{
    display: flex;
  }
  .shareIco img{
    width: 0.54rem;
    height: 0.54rem;
    margin-left: 0.06rem;
  }
  .infoDetail{
    padding-right: 0.1rem;
    padding-left: 0.12rem;

  }
  .infoDetail:last-child{
    margin-bottom: 0.25rem;
  }
  .infoDetail li{
    padding: 0.1rem 0;
    width: 3.5rem;
    font-size: 0.16rem;
    line-height: 0.3rem;
    white-space: nowrap;
    text-overflow:ellipsis;
    color:#000000;
    overflow: hidden;
    border-bottom: 1px solid #dddddd;
    letter-spacing: 0.02rem;
  }
   .infotitle{
    padding: 0.1rem;
    padding-left: 0.12rem;
    font-size: 0.2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    color:#000000;
    background:#eeeeee ;
    border-top: 1px solid #dddddd;
    border-bottom: 3px solid #b48868;
    font-weight: bold;
  }

</style>
