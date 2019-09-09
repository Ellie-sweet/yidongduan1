<template>
  <div class="loginstyle">
    <img src="../../assets/title.png" id="img1">
    <p>登录后抓鱼更方便哦</p>
    <img src="../../assets/landing.png" id="img2">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <mt-button size="large">登录</mt-button>
    <input type="checkbox" value="阅读须知">
    <div>哈喽</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
    }
  }
}
</script>

<style scoped>
.loginstyle{
  text-align:center;
}
#img1{
  width:70%;
  margin-top:30px;
}
p{
  font-size:20px;
  font-family:"幼圆体";
  font-weight:bold;
}
#img2{
  width:60%;
  margin-bottom:20px;
}
</style>