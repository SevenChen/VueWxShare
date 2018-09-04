import axios from 'axios'
import wx from 'weixin-js-sdk'

const wxshare = {
  do(queryId,icon='',title='',desc='') {
    let url = location.href.split('#')[0] ; //ruoter是hash模式的时候 获取锚点之前的链接
    axios.get('https://share.gw.com.cn/info.php',{   //服务端获取配置jssdk 签名等 文件
      params: {
        url: url
      }
    }).then(response => {
        let res = response.data;
        console.log(res);
        this.wxInit(res,queryId,icon,title,desc);
    });
  },
  // 微信分享
  wxInit(res,queryId,icon='',title='',desc='') {
    let url = location.href.split('#')[0] //获取锚点之前的链接  

    //let links = url+'#/Food/' + this.$route.params.id;    //用于签名的url 和 用于微信分享的url可以不同
    let links = url+'#/?jsonurl='+queryId;
    //let title = 'Vue微信二次分享';
    //let desc = '该插件是解决Vue微信二次分享插件';
    //let imgUrl = 'http://mnews.gw.com.cn/wap/html/temp/cjyw.png';

    wx.config({
      debug: false,
      appId: res.appId,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });

    wx.ready(function() {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: links, // 分享链接
        imgUrl: icon, // 分享图标
        success: function() {
          // alert("分享到朋友圈成功")
        },
        cancel: function() {
          // alert("分享失败,您取消了分享!")
        }
      });
      //微信分享菜单测试
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: links, // 分享链接
        imgUrl: icon, // 分享图标
        success: function() {
          // alert("成功分享给朋友")
        },
        cancel: function() {
          // alert("分享失败,您取消了分享!")
        }
      });
    });
    wx.error(function(err) {
      alert(JSON.stringify(err))
    });
  }
}

export default wxshare