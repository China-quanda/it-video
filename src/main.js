import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局样式
import '../src/assets/style/index.less'

Vue.use(ElementUI)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 设置网站标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
