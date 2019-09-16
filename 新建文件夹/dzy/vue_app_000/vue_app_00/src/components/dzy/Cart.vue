<template>
  <div class="container">
    <div class="rootstyle">
      <!-- 页头 -->
      <div class="page-wrap">
        <div class="myAccount">
          <img src="@/assets/my_account.png">
          <p>Ellie</p>
        </div>
        <a>登出账号</a>
      </div>
      <!-- 购物小组件 -->
      <div class="orderstyle">
        <div>
          <a href="">
            <img src="" alt="">
            余额
          </a>        
        </div>
        <div>
          <a href="">
            <img src="" alt="">
            余额订单
          </a>         
        </div>
        <div>
          <a href="">
            <img src="" alt="">
            买卖的书
          </a>         
        </div>
        <div>
          <a href="">
            <img src="" alt="">
            通知
          </a>      
        </div>
      </div>
      <!-- 动态，书架 -->
      <div>
        <div class="bookstyle">
          <a href="">动态</a>
          <a href="">书架</a>
        </div>
      </div>
     
    </div>
    <!-- 读书笔记 -->
    <div class="note">
      <a href="">
        <img src="" alt="">
        写读书笔记
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
    width:;
    height:;
    text-align:center;
    position:relative;
  }
  .rootstyle{
    text-align:center;
    position:relative;
  }
  .page-wrap{
    width:100%;
    height:175px;
    background-color:#D19C90;
    
  }
  .myAccount{
    width:100%;
    height:100%;
    position:absolute;
    top:20px;  
  }
  .myAccount>p{
    margin:0px;
  }
  .page-wrap>a{
    display:inline-block;
    width:73px;
    height:25px;
    text-decoration-line: none;
    border:1px solid #fff;
    border-radius:20px;
    line-height:25px;
    color:#fff;
    position:absolute;
    top:15px;
    right:15px;
    font-size:12px;
  }
  .orderstyle{
    width:360px;
    height:72px;
    display:flex;
    justify-content:space-around;
    background-color:#D19C90;
    align-items:center;
  
    
  }
  .orderstyle a{
    text-decoration-line: none;
    color:#fff;
    font-size:14px;
  }
  .bookstyle{
    width:100%;
    height:56px;
    display: flex;
    justify-content: space-around;
    background-color:#D19C90;
    line-height: 56px;
  }
  .bookstyle>a{
    text-decoration-line:none;
    color:#fff;
    font-size:20px;
  }
  .container>.note{
    width:142px;
    height:45px;
    border:1px solid rgb(230,230,230);
    border-radius:20px;
    position:absolute;
    
  }
  .container>.note>a{
    text-decoration-line:none;
  }
</style>