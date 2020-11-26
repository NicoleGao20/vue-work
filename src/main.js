import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/reset.css';//基础样式
import './assets/js/font.js'; //字体

import router from './plugins/router.js' //引入路由

import './plugins/axios'; //拦截器

import './filters/index.js'  //全局过滤
var a = 35346;
console.log(a)
// import './plugins/vant.js'
//引入第三方组件库 vant
import 'vant/lib/index.css'
import { Tab, Tabs, NavBar } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);


let vm = new Vue({
  render: h => h(App),
  router,
  data: {
    bLoading: false,
    bFoot: true
  }
}).$mount('#app')

export default vm;

var ccc = '你好'
console.log(ccc)