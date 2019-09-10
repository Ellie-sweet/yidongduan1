<template>
  <div class="container">
            <!-- 首页搜索框 -->
            <div>
              <img src="" alt=""><input type="text" placeholder="搜索多抓鱼">
            </div>
            <!-- 轮播图 -->
            <div>
              <img src="" alt="">
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
</template>

<script>
export default {
  data(){
    return {
      active:"all",
    }
  },
}
</script>

<style>

</style>