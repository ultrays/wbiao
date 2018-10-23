<template>
  <ul class="section_left">
    <li class="section_left_li" v-for="(li,index) in leftdata" @click="indexChange(index)">
      <span href="javascript:;" class="recommmend" :class="{'active':num==index}">{{li.listname}}</span>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "SortSectionLeft",
        props:["leftdata"],
      data(){
        return {
          flag:false,
          num:0
        }
      },
      methods:{
        indexChange(idx){
          this.$emit("send",idx)
          this.num=idx;
        }
      }
    }
</script>

<style scoped>
  .section_left{
    width:22%;
    position: fixed;
  }
  .section_left_li{
    width:100%;
    height:.46rem;
    border-bottom:1px solid #e3e3e3;
    display:-webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .recommmend{
    display: block;
    width:.6rem;
    height:.24rem;
    border-radius:.1rem;
    font-size:.12rem;
    color:#595959;
    text-align: center;
    line-height: .24rem;
  }
  #recommmendbg{
    background: #515151;
    color:#ffffff;
    width:.6rem;
    height:.24rem;
    border-radius:.1rem;
  }
  .active{
    background: #515151;
    color:#ffffff;
    width:.6rem;
    height:.24rem;
    border-radius:.1rem;
  }
</style>
