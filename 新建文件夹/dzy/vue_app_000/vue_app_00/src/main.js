import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方组件库mint-ui
// 完成引入所有组件
import MintUI from "mint-ui"
// 单引入mint-ui样式文件
import "mint-ui/lib/style.css"

// 将mint-ui注册vue
Vue.use(MintUI)

// 引入图标字体文件
import "./font/iconfont.css"



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
