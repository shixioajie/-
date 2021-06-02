### vue 基础

#### mvvm

- MVVM （Model-view-viewmodle）是一种软件架构模式。
- 模型、视图、视图模型。
- 三大框架都是这样的设计模式。

#### vue-cli 4.x

开发标准工具： https://cli.vuejs.org/zh/
[介绍]：现在比较推荐的是 @vue/cli 默认下载的是 4.x 版本，习惯老版本的需移步https://github.com/vuejs/vue-cli/tree/v2#vue-cli-- 。
Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：

- 通过 @vue/cli 实现的交互式的项目脚手架。
- 通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。
- 一个运行时依赖 (@vue/cli-service)，该依赖：
  - 可升级;
  - 基于 webpack 构建，并带有合理的默认配置；
  - 可以通过项目内的配置文件进行配置；
  - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理 Vue.js 项目的用户界面。
  Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

##### 安装：

1. 指令安装： **npm install -g @vue/cli** 或者 **yarn global add @vue/cli**
2. 版本查看：**vue --version**
3. 升级：npm update -g @vue/cli 或者 yarn global upgrade --latest @vue/cli
   3.1 项目依赖：上面列出来的命令是用于升级全局的 Vue CLI。如需升级项目中的 Vue CLI 相关模块（以 @vue/cli-plugin- 或 vue-cli-plugin- 开头），请在项目目录下运行 vue upgrade：
   3.2 用法： upgrade [options] [plugin-name]
   3.3 选项：
   3.3.1 -t, --to <version> 升级 <plugin-name> 到指定的版本.
   3.3.2 -f, --from <version> 跳过本地版本检测，默认插件是从此处指定的版本升级上来
   3.3.3 -r, --registry <url> 使用指定的 registry 地址安装依赖
   3.3.4 --all 升级所有的插件
   3.3.5 --next 检查插件新版本时，包括 alpha/beta/rc 版本在内
   3.3.5 -h, --help 输出帮助内容

##### 快速开发方式

[介绍]：你可以使用 vue serve 和 vue build 命令对单个 \*.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：安装指令： **npm install -g @vue/cli-service-global**
[提示]：Usage: serve [options] [entry] 在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器 Options:

-o, --open 打开浏览器
-c, --copy 将本地 URL 复制到剪切板
-h, --help 输出用法信息
你所需要的仅仅是一个注意名字需要是 App.vue 文件：

```js
<template>
  <h1>Hello!</h1>
</template>
```

然后在这个 App.vue 文件所在的目录下运行：vue server。这个感觉不怎么常用暂且不详细说明，有兴趣可以：https://cli.vuejs.org/zh/guide/prototyping.html。

##### 创建一个项目

- 首先安装好依赖以后，运行这个命令来创建一个新项目：vue create [自定义项目名称] 。提示：如果你需要拉去 2.x 也就是相对旧的版本，需要先下载：npm install -g @vue/cli-init 然后运行：vue init webpack [自定义项目名]会基于旧版本。
- vue create 【给你的项目名】完事会提示你，选择默认配置还是自己选择些配置。。。
  - Please pick a preset: default(默认配置) / Manually select features(手动选择功能)。
  - 如果是选择了手动配置之后：Check the features needed for your project (检查项目所需的功能)可选大致：
  	- 1 * Babel   （babel的支持） 
  	- 2 TypeScript   （TS支持）
  	- 3 Progresssive Web App （PWA） Support  （进步Web应用程序(PWA)支持）PWA 可以将web 和 App 各自的优势融合在一起，实现类似 App 的交互。
  	- 3 * Router		（路由支持）
  	- 4 * Vuex	      （Vuex支持）
  	- 5 * CSS Pre-processors   （CSS 预处理）
  	- 6 * Linter / Formatter 	（代码质量管理）
  	- 7 Unit Testing   （单元测试）
  	- 8 E2E Testing   （E2E测试）
  	- 以上标 * 为常用选择。
  	- Use history mode for router ？
- vue ui 启动一个图形化界面来管理项目。

- Babel # 在项目中使用 es6 语法可能有些浏览器还没有实现所以兼容性问题，给没实现一些语法的浏览器解释翻译成 es5。

- TypeScript # 顾名思义如果项目使用的是 ts 语法就需要选上了。

- Progressive Web App (PWA) # 是不渐进式开发的应用。PWA 可以将 web 和 app 各自的优势融合在一起，实现类似 app 的交互。

- Router #使用到路由功能。

- Vuex #单项数据流或者是状态管理的一个组件，我还喜欢直接叫它商店（store）。

- CSS Pre-processors css 预编译语言。

- Linter / Formatter 用来监视你的代码符合不符合它的规范的，你懂的。

- Unit Testing 单元测试。

- E2E Testing E2E 测试。

  vue-cli 3 以上的朋友查看自己的项目配置可以 vue inspect > output.js

初学者注意这里时上下键选择用空格选中。

很多东西我也不是很熟有时间整理吧，建议大家也可以试试 vue ui 构建一个项目，广大学友有兴趣话也可以留言给我一块研究整理。
