<template>
  <div>   
    <!-- 轮播图 -->
    <div>
      <img :src="imgurl"> 
    </div>
  </div>
</template>

<script>
// 引入01子组件

export default {
  props:{
    imgurl:{default:""},
  }
  
  
}
</script>

<style>

</style>