import Vue from 'vue'
import Router from 'vue-router'

import Citroen from './views/citroen/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'citroen',
      component: Citroen
    }
  ]
})