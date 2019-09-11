<template>
  <div>   
    <!-- 轮播图 -->
    <div>
      <img :src="imageurl"> 
    </div>
  </div>
</template>

<script>
// 引入01子组件

export default {
  props:{
    imageurl:{},
  }
  
  
}
</script>

<style>

</style>