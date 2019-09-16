import Vue from 'vue'
import Router from 'vue-router' 
//引入项目入口组件
import Home from "./components/dzy/Home.vue"
// 引入首页信息组件
import MessageList from "./components/dzy/common/MessageList.vue"
import Message from "./components/dzy/common/Message.vue"

// 引入登录页面
import Login from "./components/dzy/Login.vue"
// 购物车
import Cart from "./components/dzy/Cart.vue"
// 卖书
import BookList from "./components/dzy/BookList.vue"



Vue.use(Router)
export default new Router({
  routes: [  //配置自定义组件路径
    {path:'/Home',component:Home},
    {path:'/MessageList',component:MessageList},
    {path:'/Login',component:Login},
    {path:'/Cart',component:Cart},
    {path:'/BookList',component:BookList},
  ]
})
