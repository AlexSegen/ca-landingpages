import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

import Meta from "vue-meta";
Vue.use(Meta);

import Lightbox from 'vue-easy-lightbox'
Vue.use(Lightbox)

import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

//Custom & Vendors
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/app.scss'

import { TooltipPlugin } from 'bootstrap-vue'
Vue.use(TooltipPlugin)

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
