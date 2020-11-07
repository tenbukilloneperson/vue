src
  -compiler   编译器相关
  -core       核心代码(与平台无关)
  -platforms  平台相关
  -server     服务端相关
  -sfc        单文件组件
  -shared     公共代码

## 开始
  - 打包(rollup) 和 调试
  - rollup 只会打包 js 文件, 更适合在用于 vue这种库的使用
## Vue版本的解释
  - 运行时版本(不包含编译器)和完整版本(编译器和render函数)  
  - UMD(vue.js) / cjs(vue.common.js) / esm(vue.esm.js)
  - UMD通用的模块化规则
  - 编译器是用来将 template 模版字符串编译为 render 渲染函数的代码
  - 运行时代码体积小 运行效率高
## Vue CLI创建的项目
  - vue-cli创建的项目默认使用的是ESM的运行时版本(vue.running.esm.js) 不包含编译器
  - 可通过 `vue inspect > output.js` 查看 vue默认的webpack配置文件
  - 单文件组件不需要编译器
  - 会将 .vue 文件转换为JS对象，并且会将<template></template>中的内容转换为 render 渲染函数

## 查找入口文件
  - entry-runtime-with-compiler 
  - 通过 source面板的 call Stack 可以看到函数的调用关系
  - 

## 导出 Vue 的四个文件
`src/platform/web/entry-runtime-with-compiler`
  - web平台相关的
  - 重写了平台相关的 $mount() 方法
  - 注册了 Vue.compile()方法 传入一个html字符串 返回一个render 函数
  - 次文件主要是增加了 编译的功能
`src/platform/web/runtime/index`
  - web平台相关
  - 注册了全局指令 v-modal v-show
  - 注册了全局组件 v-transition v-transition-group
  - 全局方法：
    - __patch__() 把虚拟DOM 转化为真实DOM
    - $mount() 挂载方法
`src/core/index`
  - 与平台无关
  - 设置了 Vue的静态方法 initglobalAPI(Vue)
`src/core/instance/index`
  - 与平台无关
  - 定义 Vue 的构造函数 调用了 this._init(options)
  - 给 Vue 中混入了常用的实例成员

## Vue 的静态成员
`源码位置 src/core/global-api/index 的initGlobalAPI()方法`
`在内部Vue 会维护 Vue.config 和 Vue.options 俩个选项`
- Vue.use()
- Vue.mixin()
- Vue.extend()
- Vue.filter()
- Vue.directive()
- Vue.component()
- Vue.set()
- Vue.delete()
- Vue.compile()
- Vue.version()

## Vue 的实例成员
`this._init(options)`
`src/core/instance/init.js` 初始化

## 初始化的过程
