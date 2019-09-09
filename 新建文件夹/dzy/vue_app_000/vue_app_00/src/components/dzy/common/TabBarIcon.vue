<template>
  <div>
    <!-- TabBarIcon.vue 图标 -->
    <img :src="focused?selectedImage:normalImage" class="imgstyle" >
  </div>
</template>

<script>
export default {
  //声明接收父元素传递的元素
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""},
  }
}
</script>

<style>

</style>