<template>
  <div class="container">
    <!-- 按钮 -->
    <div>
      <mt-button v-for="(item,index) of list" :key="index" size="small" @click.native.prevent="active='{{index+1}}'"  @click="btn(index)" :class="{colorChange:index+1==dynamic}">{{item.name}}</mt-button>
      
    </div>
    <!-- 子面板 -->
    <div class="selection">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
          <mt-cell >aa</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell >bb</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell >cc</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell >dd</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell >ee</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <mt-cell >ff</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="7">
          <mt-cell >gg</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="8">
          <mt-cell >hh</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="9">
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
      active:"2",
      
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
    btn(index){
      this.dynamic=index+1;
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