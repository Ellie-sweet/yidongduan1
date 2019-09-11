<template>
  <div>
    
    <div class="container">
            <!-- 首页搜索框 -->
            <div>
              <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
            </div>
            <!-- 轮播图 -->
            <div>
              <mt-swipe :show-indicator="true">
                <mt-swipe-item> 
                  <message
                  v-for="(item,index) in images" :key="index" 
                  :imageurl="item.img"></message>
                </mt-swipe-item>
              </mt-swipe>
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
        {img:require("@/assets/chongban.png")},  
        {img:require("@/assets/death.png")},
        {img:require("@/assets/huayu.png")},
        {img:require("@/assets/kexue.png")},
        {img:require("@/assets/xinlixue.png")},
        {img:require("@/assets/bianji.png")},
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

<style>

</style>