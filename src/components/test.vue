<template>
<h1>{{ msg }}</h1>
</template>

<script>
import wxshare from '@/assets/js/wxshare'

export default {
	name: 'test',
	data () {
	    return {
	      msg: 'Welcome to Weixin Share'
	    }
  	},
  	mounted() {
  		//this.$nextTick(function () {
/*	      wxshare.do()		*/
	    //})
	},
  	created() {
  	}
}
</script>