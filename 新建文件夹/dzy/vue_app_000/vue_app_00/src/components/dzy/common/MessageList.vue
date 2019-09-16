<template>
  <div>
    
    <div class="container">
            <!-- 首页搜索框 -->
            <div>
              <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
            </div>
            <!-- 轮播图 -->
            <div class="imgs">
              <!-- <mt-swipe :show-indicator="true">
                <mt-swipe-item>  -->
                  <!-- <message
                  v-for="(item,index) in images" :key="index" 
                  :imageurl="item.img"></message> -->
                  <img src="@/assets/chongban.png" >
                  <img src="@/assets/death.png" >
                  <img src="@/assets/huayu.png" >
                  <img src="@/assets/kexue.png" >

                <!-- </mt-swipe-item>
              </mt-swipe> -->
            </div>
            <!-- 分类 -->
            <div>
              <a href="">猜你喜欢</a>
            </div>
            <!-- 两个按钮分类 -->
            <div>
              <div class="btn">
                <mt-button size="small" @click.native.prevent="active='all'">全部</mt-button>
                <mt-button size="small" @click.native.prevent="active='rank'">综合排序</mt-button>
              </div>
              <div>      
                <mt-tab-container v-model="active">
                  <mt-tab-container-item id="all">
                    <mt-cell title="图片"></mt-cell>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="rank">
                    <mt-cell></mt-cell>
                  </mt-tab-container-item>
                </mt-tab-container>
              </div>
            </div>
            
            <!-- 列出的豆瓣评分8.5分以上的书籍 -->
            <div>
              <!-- 左边图片与文字 -->
              <div>
                <img src="" alt="">
              </div>
              <!-- 右边小图标 -->
              <div>
                <img src="" alt="">
              </div>
            </div>
            <!-- 分类和全部分类 -->
            <div>
              <span>去逛逛这些分类</span><a href="#">全部分类</a>
              <div></div>
            </div>
            <!-- 推荐的书籍 -->
            <div>
              <img src="" alt="">
            </div>    
          </div>
  </div>
</template>

<script>
// 引入子组件
import Message from "./Message"
export default {
  data(){
    return {
      value:"",
      active:"all",
      images:[
        {img:"@/assets/chongban.png"},  
        {img:"@/assets/death.png"},
        {img:"@/assets/huayu.png"},
        {img:"@/assets/kexue.png"},
        {img:"@/assets/xinlixue.png"},
        {img:"@/assets/bianji.png"},
      ],
    }
  },
  methods:{
   
  },
  // 注册子组件
  components:{
    "message":Message,
  },
}
</script>

<style scoped>
  .container{
    position:relative;
    top:0px;
    left:0px;
  }
  .mint-search{
    width:100%;
    height:52px;
    position:absolute;
    top:10px;
  }
  .mint-search>.mint-searchbar{
    background-color:#ddd;
    border-radius:20px;  
    padding:0px 0px;
    z-index:0;
  }
  .mint-searchbar-inner{
    background-color:#ddd;
  }
</style>