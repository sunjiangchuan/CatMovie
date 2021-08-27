import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from '@/common/header'
import BScroll from "@/common/Bscroll"
import Loading from "@/common/loading"
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VUz from "./library"

Vue.use(VUz)
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./images/loading.gif"),
  loading: require("./images/loading.gif"),
  attempt: 1
})

Vue.component("Header", Header)
Vue.component("BScroll", BScroll)
Vue.component("Loading", Loading)

Vue.filter("topath", (val, params) => {
  var reg = /w\.h/;
  return val.replace(reg, params)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')