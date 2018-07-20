import Vue from 'vue'
import App from './App.vue'



import Router from "vue-router"
import fastClick from 'fastclick'
import axios from "axios"


import HeaderTop from './components/header/header'
import SwiperComponents from './components/swiper/swiper'
import HomeIcons from './components/homeicons/homeicons'
import RecommendCom from './components/recommend/recommend'
import HomeWeekend from './components/weekend/weekend'
import CityHome from './components/city/city'
import TestHome from './components/test/test'
import HomeIndex from './components/homeindex/homeindex'
import HomeDetail from './components/detail/detail'

import store from "./store"
Vue.use(Router)

// swiper 组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
//swiper 组件

import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"

Vue.config.productionTip = false
fastClick.attach(document.body)

let router = new Router({
	routes: [
	    {
	      path: '/',
	      component: HomeIndex
	    },
	    {
	      path: '/city',
	      component: CityHome
	    },
	    {
	      path: '/detail/:id',
	      component: HomeDetail
	    }
	  ],
	  scrollBehavior (to, from, savedPosition) {
		  return { x: 0, y: 0 }
		}
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
