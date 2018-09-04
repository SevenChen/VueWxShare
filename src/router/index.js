import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mnewsshare from '@/components/mnewsshare'
import test from '@/components/test'
import wx from 'weixin-js-sdk';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      query:{
        jsonurl: 'jsonurl'
      },
      name: 'mnewsshare',
      component: mnewsshare
    }
  ]
})
