<template>
  <div class="container">
    
    <div>
      <!-- 首页搜索框 -->
      <div>
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
      </div>
      <!-- 点播图 -->
      <div class="imgs">
        <message :images="images"></message> 
      </div>
      <!-- 分类 -->
      <div class="selection">
        <selection></selection>
      </div>
      <!-- 两个按钮分类 -->
      <div>
        <div class="btn">
          <mt-button size="small" @click.native.prevent="active='all'">全部</mt-button>
          <mt-button size="small" @click.native.prevent="active='rank'">综合排序</mt-button>
        </div>
        <!-- <div class="images">      
          <mt-tab-container v-model="active">
            <mt-tab-container-item id="all" class="allimgs">
              <mt-cell>
                <div><img src="@/assets/hunxue.png" class="image"></div>
              </mt-cell>
              <mt-cell>
                <img src="@/assets/jinghua.png" >
              </mt-cell>
                <img src="@/assets/lutedan.png" >
              <mt-cell>
                <img src="@/assets/mogen.png" >
              </mt-cell>
              <mt-cell>
                <img src="@/assets/shengwu.png" >
              </mt-cell>
              <mt-cell>
                <img src="@/assets/qie.png" >
              </mt-cell>
              <mt-cell>
                <img src="@/assets/saichuan.png" >
              </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="rank" class="rankimgs">
              <mt-cell></mt-cell>
            </mt-tab-container-item>
          </mt-tab-container>
        </div> -->
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
import Selection from "./Selection"
export default {
  data(){
    return {
      value:"",
      active:"all",
      images:[
        {imgurl:require("@/assets/chongban.png")},  
        {imgurl:require("@/assets/death.png")},
        {imgurl:require("@/assets/huayu.png")},
        {imgurl:require("@/assets/kexue.png")},
        {imgurl:require("@/assets/xinlixue.png")},
        {imgurl:require("@/assets/bianji.png")},
      ],
    }
  },
  methods:{
   
  },
  // 注册子组件
  components:{
    "message":Message,
    "selection":Selection,
  },
}
</script>

<style scoped>
  .container{
    width:100%;
    position:relative;
  }
  .mint-search{
    width:100%;
    height:52px;
    /* position:absolute; */
    /* top:5px; */
  }
  /* .mint-search>.mint-searchbar{
    background-color:#ddd  !important;
    border-radius:40px  !important;  
    padding:0px 0px  !important;
    z-index:0  !important;
  }
  .mint-searchbar-inner{
    background-color:#ddd  !important;
  } */
  .imgs{
    display:flex;
    /* width:70px;
    height:40px; */
    /* position:absolute;
    top:58px; */
  }
  /* .selection{
    position:absolute;
    top:160px;
  } */
  .images{
    position:absolute;
    /* top:170px;          */
  }
  .allimgs{
    margin:5px;
  }
  .rankimgs{
    margin:5px;
  }
  div.mint-cell-wrapper{
    width:152px;
  }
  .image{
    left:0px;
  }
  button, input, optgroup, select, textarea{
    margin:5px;
  }
</style>