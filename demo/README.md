> 敲一下vue ssr文档中的代码片段


## Basic Usage

1. demo1.js
 使用renderer将Vue实例渲染城html内容
 vue-server-renderer 的基本使用

2. demo2.js
 使用express， 与生成html的代码结合，实现基本httpserver例子。

3. demo3-with-template.js
 `index3.template.html`
 使用vue ssr的template模板功能
 这个跟nuxt的使用方式有点类似。
 可以设想，.vue 文件也将有类似用法

4. demo4.js
 `index4.template.html`
 为renderer添加额外的context变量，在模板文件中写入变量


## Write Universal Code
> 服务端默认来自多个请求的同一对象相互之间不关联。

** 生命周期 **
SSR期间会执行 beforeCreate created
beforeMount mounted 只会在客户端执行
会影响到全局的代码，放在beforeMount、mounted中，因为destroy方法只在客户端会执行。

** 通用平台API **
服务端、浏览器都有自己的一些私有变量，比如window、global，使用代码或第三方包时，使用适配全平台的，比如axios在node和浏览器都能用。

** 自定义命令 **
自定义的命令很多都直接操作DOM，这在SSR过程中回出错。
两种解决方法：1、更改代码方式，转化为组件；2、再做一个server-render的版本，只在服务端渲染到时候用。

## Source Code Structure

** 单件中避免状态变量 **
每次请求，创建一个新的vue实例

5. demo5.js
  `app5.js`

  demo5-.js  反面例子
  首先，访问 `/` 渲染结果中没有h1，
  然后访问`/?id=lary`，渲染结果中有h1标签
  然后再次访问`/`, 渲染结果中有h1，因为上一次的访问，改变了server中的全局变量。
  这样说明了教程中 Create Fresh Vue Instance 的必要。
6.
