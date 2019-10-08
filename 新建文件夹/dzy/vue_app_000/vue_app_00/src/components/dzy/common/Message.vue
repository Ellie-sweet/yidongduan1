<template>
  <div class="imgstyle">   
    <!-- 轮播图 -->
    <div v-for="(item,index) of images" :key="index" class="img">
      <img :src="item.imgurl"> 
    </div>
  </div>
</template>

<script>
// 引入01子组件

export default {
  data(){
    return {  }
  },
  props:{
    images:{default:""},
  }
  
  
}
</script>

<style scoped>
  .imgstyle{
    width:100%;
    display:flex;
    white-space: nowrap;
  }
  .img{
    margin:5px 5px 5px 0px;
    white-space: nowrap;
  }
  img{
    width:100px;
    height:150px;
    border-radius:8px;
  }
 
</style>