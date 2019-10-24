<template>
  <div class="container">
    <!-- 按钮 -->
    <div  >
      
      <!-- <mt-button v-for="(item,index) of list" :key="index" size="small"  @click="btn(index,active)" @click.native.prevent="active='index'" :class="{colorChange:index==dynamic}">{{item.name}}</mt-button> -->

      <mt-button size="small" @click.native.prevent="active='0'">全部分类</mt-button>
      <mt-button size="small" @click.native.prevent="active='1'">猜你喜欢</mt-button>
      <mt-button size="small" @click.native.prevent="active='2'">鱼友推荐</mt-button>
      <mt-button size="small" @click.native.prevent="active='3'">豆瓣8.5</mt-button>
      <mt-button size="small" @click.native.prevent="active='4'">free</mt-button>
      <mt-button size="small" @click.native.prevent="active='5'">越贵越省钱</mt-button>
      <mt-button size="small" @click.native.prevent="active='6'">新上架</mt-button>
      <mt-button size="small" @click.native.prevent="active='7'">只在多抓鱼有</mt-button>
      <mt-button size="small" @click.native.prevent="active='8'">新出版</mt-button>
    </div>
    <!-- 子面板 -->
    <div class="selection">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="0">
          <mt-cell >aa</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">
          <mt-cell >bb</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell >cc</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell >dd</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell >ee</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell >ff</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <mt-cell >gg</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="7">
          <mt-cell >hh</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="8">
          <mt-cell >ii</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:"1",
      dynamic:-1,
      list:[
        {name:"全部分类"},
        {name:"猜你喜欢"},
        {name:"鱼友推荐"},
        {name:"豆瓣8.5"},
        {name:"free"},
        {name:"越贵越省钱"},
        {name:"新上架"},
        {name:"只在多抓鱼有"},
        {name:"新出版"},
      ],
    }
  },
  methods:{
    btn(index,active){
      console.log(index);
      this.active="index";
      // this.dynamic=index;
     
    }
  }
}
</script>

<style scoped>
  .container{
    width:100%;
    white-space: nowrap;
  }
  .mint-button--default{
    color:#AAB2C3;
    background-color:#F2F2F2;
  }
  .colorChange .mint-button--default{
    color:#fff;
    background-color:#D6BA8C;
  }
  button, input, optgroup, select, textarea{
    margin:5px 5px 5px 0px;
  }
</style>