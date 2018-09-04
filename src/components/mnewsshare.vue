<template>
<div>
	<article class="news-detail">
		<h1 class="news-tit">{{title}}</h1>
		<h2 class="news-source">来源：
			<span class="source-site">{{source}}</span>
			<span class="source-date">{{otime}}</span>
		</h2>
		<section class="news-text">
			<div v-html="content"></div>
		</section>
	</article>
	<footer class="fixed-bar">
        <div class="fixed-bar-bg"></div>
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.android.dazhihui" class="fixed-bar-link">
            <div class="bar-info"><p class="app-name">大智慧移动APP</p><p class="app-slogan">您随身的<strong>投资专家</strong></p></div>
            <div class="bar-opera">
                <!-- a 如果用户没有安装，下方的状态应该是“免费下载”，页面跳转至相应链接-->
                <span class="opera-btn">免费下载</span>
            </div>
        </a>
        <span class="fixed-bar-closed"><strong>&times;</strong></span>
    </footer>
</div>
</template>

<script>
import axios from 'axios'
import wxshare from '@/assets/js/wxshare'

export default {
	name: 'gwshare',
	data () {
	    return {
	      title: '--',
	      source: '--',
	      otime:'----- --:--:--',
	      content:'分享内容',
	      jsonurl:''
	    }
  	},
  	created() {
  		let self = this;

  		this.jsonurl = self.$route.query.jsonurl;

  		axios.get(self.$route.query.jsonurl).then(response => {
	        let res = response.data[0];
	        self.title = res.title;
	        self.source = res.source;
	        self.otime = res.otime;
	        self.content = res.content.replace(new RegExp("<a[^>]*href=\"@[^\"]*",'gm'),"<a href=javascript:void();");
	    }).then(()=>{
	    	wxshare.do(self.jsonurl,'http://static.yundzh.com/logo.png',self.title,'大智慧分享');
	    });
  	},
  	methods: {
  	},
  	mounted() {
  		//this.$nextTick(function () {
	    //  wxshare.do(this.jsonurl,'http://static.yundzh.com/logo.png',this.title,'大智慧分享');
	    //})
	}
  	
}
</script>
