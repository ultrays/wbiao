<template>
    <section>
        <div class="list" v-for="(i,index) in list" :key="i.id">         <!--商品列表-->
            <div class="list_top">
                <div class="list_top_top">
                    <input type="checkbox">
                    <h5>{{list[index].lisTitle}}</h5>
                </div>
                <div class="list_top_bottom">
                    <p>{{list[index].manJia}}</p>
                    <h6>{{list[index].xuaChu}}</h6>
                    <h6>{{list[index].diaDia}}</h6>
                </div>
              </div>
            <div class="list_hx"></div>
            <div class="list_bottom">
              <div class="list_bottom_left">
                 <input type="checkbox">
              </div>
              <!--内部包含切换-->
              <div class="list_bottom_right">
                  <img :src="list[0].pic" alt="">
                  <div class="list_bottom_right_a">
                      <p class="titletxt">{{list[index].title}}</p>
                      <span>{{list[index].yangShi}}</span>
                      <div class="list_bottom_right_min">
                          <h4>{{list[index].xianJia}}</h4>
                          <h6>{{list[index].yuanJia}}</h6>
                          <h6>×<span>{{list[index].count}}</span></h6>
                      </div>
                </div> <!--商品的详情-->
                <!--隐藏部分-->
                <div class="count" style="display: none">
                    <div class="count_add">
                      <a href="#" @click="add += 1">-</a>
                      <span>1</span>
                      <a href="#">+</a>
                    </div>
                  <p>删除</p>
                </div>  <!--商品的计算-->
              </div>
            </div>
        </div>
        <div class="check">
          <input type="checkbox">
          <h3>全选</h3>
          <!--内部包含切换-->
          <div class="check_max" >
              <div class="check_min">
                <h4>总计:￥<span>0</span></h4>
                <h5>总额:￥<span>0</span></h5>
              </div>
              <p>结算</p>
              <i>0</i>
          </div>
          <!--隐藏部分-->
          <div class="delete" style="display: none">
              <h4>移除收藏</h4>
              <p>删除</p>
        </div>
      </div>   <!--下部全选按钮-->
    </section>
</template>

<script>
    export default {
        name: "cartsSection",
      props:["list"],
      created(){
          console.log(this.list)
      }
    }
</script>

<style lang="scss" scoped>
  section{
    height: 100%;
    .list{
      height: 1.68rem;
      background: white;
      margin-bottom: 0.1rem;
      .list_top{
        height: 0.62em;
        .list_top_top{
          height: 0.33rem;
          display: flex;
          align-items: center;
          input{
            width: 0.14rem;
            height: 0.14rem;
            -webkit-appearance: none;
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            outline: none;
            margin: 0 0.07rem 0 0.1rem;
          }
         input:checked{
            background: url("../../../static/peng/duihao.png") no-repeat center;
            /*background-size: cover;*/
          }
          h5{
            font-weight: 900;
            font-size: 0.11rem;
            color: #373737;
          }
        }
        .list_top_bottom{
          height: 0.29rem;
          display: flex;
          align-items: center;
          p{
            width: 0.23rem;
            height: 0.11rem;
            background: red;
            font-size: 0.09rem;
            color: #fef6f6;
            border-radius: 5px;
            margin: 0 0.16rem 0 0.4rem;
            text-align: center;
            line-height: 0.11rem;
          }
          h6{
            font-size: 0.09rem;
            color: #535353;
          }
          h6:nth-child(2){
            padding: 0 0.65rem 0 0.08rem;
          }
        }
      }
      .list_hx{
        width: 3.38rem;
        height: 0.01rem;
        background: #eaeaea;
        float: right;
      }
      .list_bottom{
        width: 100%;
        height: 1.05rem;
        display: flex;
        .list_bottom_left{
          height: 1.05rem;
          width: 0.31rem;
          text-align: center;
          line-height: 0.4rem;
          input{
            width: 0.14rem;
            height: 0.14rem;
            -webkit-appearance: none;
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            outline: none;
          }
          input:checked{
            background: url("../../../static/peng/duihao.png") no-repeat center;
            /*background-size: cover;*/
          }
        }
        /*内部包含切换*/
        .list_bottom_right{
          height: 1.05rem;
          width: 3.44rem;
          display: flex;
          img{
            height: 1.05rem;
            width: 0.83rem;
          }
          /*切换隐藏*/
          .list_bottom_right_a{
            height: 1.05rem;
            width: 2.6rem;
            display: flex;
            flex-flow: column;
            padding-right: 0.1rem;
            box-sizing: border-box;
            .titletxt{
              font-size: 0.09rem;
              color: #1d1d1d;
              margin: 0.14rem 0 0.04rem 0;
              /*overflow: hidden;*/
              /*white-space: nowrap;*/
              /*text-overflow: ellipsis;*/
            }
            span{
              margin:  0.02rem 0 0.17rem 0;
              font-size: 0.08rem;
              color: #999999;
            }
            .list_bottom_right_min{
              display: flex;
              align-items: center;
              h4{
                font-size: 0.1rem;
                color: #000;
              }
              h6{
                font-size: 0.06rem;
                color: #999999;
              }
              h6:nth-child(2){
                text-decoration:line-through;
                margin: 0 1.58rem 0 0.06rem;
              }
            }

          }
        }
        .count{
          height: 1.05rem;
          width: 2.6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .count_add{
            height: 0.22rem;
            width: 1.8rem;
            border: 1px solid #dddddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
              font-size: 0.11rem;
              color: #979797;
              padding: 0.04rem 0.2rem;
            }
            a:nth-child(1){
              border-right: 1px solid #dddddd;
            }
            a:nth-child(3){
              border-left: 1px solid #dddddd;
            }
            span{
              font-size: 0.08rem;
              color: #5f5f5f;
            }
          }
          p{
            width: 0.48rem;
            height: 1.02rem;
            background: #d90000;
            color: white;
            text-align: center;
            font-size: 0.11rem;
            line-height: 1.02rem;
          }
        }
      }
    }
  }
  .check{
    background: white;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    top: 5.84rem;
    left: 0;
    width: 100%;
    height: 0.36rem;
    display: flex;
    align-items: center;
    input{
      display: block;
      width: 0.14rem;
      height: 0.14rem;
      -webkit-appearance: none;
      border: 1px solid #c9c9c9;
      border-radius: 20px;
      outline: none;
      margin:0 0.07rem 0 0.1rem;
    }
    input:checked{
      background: url("../../../static/peng/duihao.png") no-repeat center;
      /*background-size: cover;*/
    }
    h3{
      font-size: 0.1rem;
      color: #444444;
    }
    /*内部包含切换*/
    .check_max{
      width: 3.24rem;
      height: 0.36rem;
      display: flex;
      position: relative;
    .check_min{
      width:2.45rem;
      height: 0.36rem;
      display: flex;
      flex-flow: column;
      align-items:flex-end;
      justify-content: center;
      padding-right:0.05rem ;
      box-sizing: border-box;
      h4{
        font-size: 0.1rem;
        color: #595959;
        span{
          font-size: 0.1rem;
          color: #d90000;
        }
      }
      h5{
        font-size: 0.07rem;
        color: #989898;
      }
    }
      p{
        width: 0.79rem;
        height: 0.36rem;
        background:#d90000;
        text-align: center;
        line-height: 0.36rem;
        font-size: 0.11rem;
        color: #fff;
      }
      i{
        display:block;
        font-style: normal;
        font-size: 0.07rem;
        position:absolute;
        width:0.12rem;
        height: 0.12rem;
        background: #d80000;
        text-align: center;
        color: white;
        line-height: 0.12rem;
        border-radius: 7px;
        top: 0.4rem;
        left: 2.15rem;
      }
    }
    /*隐藏部分*/
    .delete{
      width: 3.24rem;
      height: 0.36rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      h4{
        font-size: 0.11rem;
        color: #545454;
        margin-right: 0.18rem;
      }
      p{
        width: 0.79rem;
        height: 0.36rem;
        background:#ccc;
        text-align: center;
        line-height: 0.36rem;
        font-size: 0.11rem;
        color: #fff;
      }
    }
  }
</style>
