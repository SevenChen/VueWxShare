// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wxshare from '@/assets/js/wxshare'

Vue.config.productionTip = false

/*
router.beforeEach((to, from, next) => {
	console.log(122);
	
    document.title = to.meta.title || 'demo'
    if (!to.query.url && from.query.url) {
        to.query.url = from.query.url
    }
    next()
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  /*
  watch: {
  	"$route": function(to, from) {
  		console.log("route change!");
  	}
  }*/
  created() {
  	//wxshare.do()
  }
})
