## Vue SSR 文档实践 - Chapter : Source Code Structure

> Doc: [Source Code Structure](http://ssr.vuejs.org/en/structure.html)

> 文件中有了import关键字，配置webpack使代码生效。

### 使用方法

```
# cd 到当前目录
# 打包客户端和服务端
../../node_modules/.bin/webpack --config webpack.client.conf.js
../../node_modules/.bin/webpack --config webpack.server.conf.js

cd dist
static & # 使用http server部署客户端
node server.js # 启用服务端
```
可在client入口访问到常规使用的vue，
可在server入口访问到服务端渲染到vue。


### Vue文件结构 ：

``` shell
src
├── components
│   ├── Foo.vue
├── App.vue # 定义components，使用import 引入Foo.vue
├── index.html # 使用HtmlWebpackPlugin生成client的index.html文件
├── main.js # universal entry
├── entry-client.js # runs in browser only
└── entry-server.js # runs on server only
```

### 创建webpack配置文件
``` shell
├── webpack.base.conf.js
├── webpack.client.conf.js
└── webpack.server.conf.js
```

babel-loader 中设置modules转译成commonjs格式，此modules为默认选项,可省略。

### 其他

entry-server 不应该将express也打包。此处代码仅用来使代码片段运行。
