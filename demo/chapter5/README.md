## 粗暴融合client-side和server-side

### 使用方法

```shell
../../node_modules/.bin/webpack --config webpack.client.conf.js #打包client-side
../../node_modules/.bin/webpack --config webpack.server.conf.js #打包server-side
node server.js
```
然后访问 http://localhost:8002/
点击 HOME、ABOUT 查看页面变化。
将只发起0.js 1.js请求，而不刷新页面。

### 其他

未使用manifest，未使用Vue-Server-Render-Plugin，方式比较粗暴。
此代码只用来理解SSR过程。

// TODO: 参考学习 vue-hackernews-2.0 的build配置
