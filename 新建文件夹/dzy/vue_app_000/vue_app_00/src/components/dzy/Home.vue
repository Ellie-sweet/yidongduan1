<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- 面板组件 -->
      <!-- 父面板 -->
      <mt-tab-container v-model="active">
        <!-- 子面板 1-->
        <mt-tab-container-item id="message">
          <messagelist></messagelist>
        </mt-tab-container-item>
        <!-- 子面板 2-->
        <mt-tab-container-item id="book">
          <booklist></booklist>
        </mt-tab-container-item>
        <!-- 子面板 3-->
        <mt-tab-container-item id="cart">
          <mycart> </mycart>
        </mt-tab-container-item>
        <!-- 子面板 4-->
        <mt-tab-container-item id="me">
          <mylogin></mylogin>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏tabbar -->
      <mt-tabbar fixed v-model="active">
        <mt-tab-item id="message" @click.native="changeState(0)">
          <tabbaricon :selectedImage="require('../../assets/sy_selected.png')" :normalImage="require('../../assets/sy_normal.png')" :focused="currentIndex[0].isSelect"></tabbaricon> 
          首页
        </mt-tab-item>
        <mt-tab-item id="book" @click.native="changeState(1)">
          <tabbaricon
          :selectedImage="require('../../assets/book_selected.png')" :normalImage="require('../../assets/book_normal.png')" :focused="currentIndex[1].isSelect"
          ></tabbaricon>
          卖书
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="changeState(2)">
          <tabbaricon :selectedImage="require('../../assets/gwc_selected.png')" :normalImage="require('../../assets/gwc_normal.png')" :focused="currentIndex[2].isSelect"></tabbaricon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon :selectedImage="require('../../assets/me_selected.png')" :normalImage="require('../../assets/me_normal.png')" :focused="currentIndex[3].isSelect"></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div> 
  </div>
</template>

<script>
// 引入主页信息
import MessageList from "./common/MessageList"
import BookList from "./BookList"
import Cart from "./Cart"
import Login from "./Login"
// 引入底部导航栏图片组件
import TabBarIcon from "./common/TabBarIcon"

export default {
  data(){
    return {
      active:"message",  //面板中显示子组件
      // 创建数组保存所有底部导航栏图片状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
      ],
    }
  },
  // 注册组件
  components:{
    "messagelist":MessageList,
    "tabbaricon":TabBarIcon,  //tabbar图片组件
    "booklist":BookList,
    "mycart":Cart,
    "mylogin":Login,
  },
  // 事件方法
  methods:{
    changeState(idx){
      for(var i=0;i<this.currentIndex.length;i++){
        if(i==idx){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      }
    }
  },
}
</script>

<style>
  .page-tabbar{
    overflow:hidden;   /*元素溢出隐藏*/
  }
  .page-wrap{
    overflow:auto;     /*溢出数据显示滚动条*/ 
    padding-bottom:60px;  /*底部导航条*/
  }
</style>