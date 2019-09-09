<template>
  <div>
    <message></message>
  </div>
</template>

<script>
// 引入子组件
import Message from "./Message"
export default {
  data(){
    return {}
  },
  // 注册子组件
  components:{
    "message":Message,
  }
}
</script>

<style>

</style>