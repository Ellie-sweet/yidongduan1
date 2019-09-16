<template>
  <div>   
    <!-- 轮播图 -->
    <!-- <div v-for="(item,index) in images" :key="index"> -->
      <img src="@/assets/chongban.png"> 
    <!-- </div> -->
  </div>
</template>

<script>
// 引入01子组件

export default {
  data(){
    return {
      images:[
          {"img":"@/assets/chongban.png"},  
          {"img":"@/assets/death.png"},
          {"img":"@/assets/huayu.png"},
          {"img":"@/assets/kexue.png"},
          {"img":"@/assets/xinlixue.png"},
          {"img":"@/assets/bianji.png"},
        ],
      }
  }
  
  
}
</script>

<style>

</style>