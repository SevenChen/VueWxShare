# wxshare

> 该项目是解决vue项目在微信里面的二次分享
> 微信分享需要的参数在服务端取
> 在需要分享的页面组件里面 mounted 里面加上：

> mounted() {
>   wxshare.do()
> }

> 也可以写在 vue的跟组件里面
> 根目录下 test.php 是取 微信jsdk 相关信息用的

## Build Setup
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 项目中用到了 axios ，weixin-js-sdk

# 例子：查看 test.vue HelloWorld.vue
# gwshare.vue 是单独为mnews开发的

#mnews 测试地址：http://dzhzqfwhalpha.gw.com.cn/index.html#/?jsonurl=http%3A%2F%2Fdzhzqfwhalpha.gw.com.cn%2Fstatic%2F260877.json
#需要外网域名测试