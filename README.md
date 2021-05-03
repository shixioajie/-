### 介绍

这是个用于学习的项目，适合学习人士是前端出于要到进阶的阶段，至于是从哪里进阶到哪里自己看感觉吧，作者也不清楚。

### 环境搭建

#### Vue-Cli

安装命令：npm install -g @vue/cli
快速原型开发：npm install -g @vue/cli-sercice-global

#### Linux 测试环境 （没有设备支持暂不展开）

- 虚拟机自建环境（Parallesls/Vmware/Hyperv）
- 购买云服务（>1C + 2G）推荐使用 1 核 2g 以上的。
- 安装 Docker

#### IDE plugins

- vs code 为 vue 配置的插件 Vue Extension Pack 集成了许多辅助 vue 开发的插件。
  - 同类推荐 ES7 React/Redux/GraphQL/React-Native snippets。Angular Extension Pack。
- webstorm 中的 plugins 可以按需安装

#### 编辑器常用设置

- [webstorm]
  settings->搜索 front->设置字体
  settings->搜索 indent->Code Style->设置缩进
  settings->Keymap->搜索 form->Code->Reformat—>重复代码格式
  **使用 webstorm 打 debug （打点调试）**

  - ![avatar](https://cdn.jsdelivr.net/gh/shixioajie/imgs/posts/16191681681.jpg)
  - ![avatar](https://cdn.jsdelivr.net/gh/shixioajie/imgs/posts/c3715.png)

- [Visual Studio Code]
  使用 Ctrl+Shift+p 打开指令示操作，如 settings、key、font。
  **使用 Visual Studio Code 打 debug（打点调试）**
  - 1 行号打红点 2 调试按钮 3 选择语言 4 配置调试 json
  - ![avatar](https://cdn.jsdelivr.net/gh/shixioajie/imgs/posts/vscode调试.jpg)

#### 真机调试

- Chrome + Android / Safari + IOS
- Fiddler / Charles
- Weinre,Spy-Debugger,vConsole (由于设备等问题主要使用第三方 window， Mac OS 都可使用)
  **Weinre**
  git 上都有：[下载] npm -g install weinre [查看] weinre --version
  注意使用点：weinre --help 帮助手册，为了避免端口号冲突的问题 weinre --httpPort=**_指定一个不冲突的端口好_** --boundHost=-all-
  启动服务：
  -> weinre --httpPort=10000 --boundHost=-all-

#### 常见的接口测试工具

- 插件类：
  Postman,DHC,REST client
- 平台类
  Yapi,DOClever,RAP2,EasyMock,Swagger
- 终端类
  Postman,SoapUI,DOClever
  **_备注_** 以上接口测试工具自行百度。

#### mock 数据

使用方法有很多这里只演示最简单的那个（直接在 mock.js 的官网查看基本使用方法），**_0-开发环境搭建（IDE 基本使用、真机调试等）\0.2mockJS.html_** 演示,注意：跟多操作在可以在官网上的示例查看。

### 记录

#### webpack

[使用默认选项配置] npm init -y
[局部安装] npm install webpack webpack-cli --save-dev (安装在开发模式下) 或 yarn add webpack webpack-cli -D
[查看版本]可以指令 `npx webpack --version` (webpack5 以后可以使用)
[全局安装]npm install webpack -g 或者 yarn global add webpack webpack-cli
[调用] npm run package.json scripts 等于的内容

##### 代码示例

```js
const config = {
   mode: "development", /*提供 mode 配置选项，告知 webpack 使用相应环境的内置优化。string
可能的值有：none, development 或 production（默认）。*/
  entry: "./src/index.js", //入口文件
  output: {
    filename: "bundle2.js", // 出口文件
    path: paths, //文件路径（需是绝对路径）
  },
  // test 属性，识别出哪些文件会被转换。
  // use 属性，定义出在进行转换时，应该使用哪个 loader。
  module: {
    // 打包文件处理css scss less json等等文件。
    rules: [{ test: /\.txt$/, use: "raw-loader" }
    {
      test:/\.css$/,
      use: ['style-loader', 'css-loader']//注意一个点，这里的执行顺序是从右向左，
      //这里是应该是先将识别的css文件打包-》然后在作为style打包。这里的打包工具已经自带了，如果有需要入 scss文件，就需要安装 sass-loader node-scss 。
    }
    ],
  },
};
```

[注意]:

- 在这里我们一次次的 npm run [配置文件] 可能觉的比较麻烦，可以在 script 内在配置一个 "wacth":"webpack --watch" cli-> npm run watch 监听相关文件的变化实时打包。
- 如果你的每次改变 html 文件你的编辑器没有自动帮你刷新，可以下载 npm install webpack-dev-server --save-dev

**_如果你觉得这里提过得演示不够详细官网文档是个好地方 https://webpack.docschina.org/ （现在已经有 webpack5 了不过出处不大，另外提一点新技术可能代表着有新坑哦，个人经验）_**



#### Gulp

gulp 也是一款打包工具。

下载：npm install gulp --save-dev ;

目录结构见./gulp 文件。

npx gulp --tasks 查看任务项

```js
//可以值定执行的任务项
// 处理js 压缩多操作
function js() {

}

// 对 css scss文件进行处理
function css() {

}


exports.scripts = js;
exports.styles = css;

exports.default = function () {
  console.log("hello gulp");
}
```

使用：npx gulp [scprits] 这样的语法来执行。

#### Yoeman

有没有感觉自己配置webpack、Gulp这样的操作会很麻烦，费时费力还记不住那，直接使用yoeman吧，它会帮你输入几条指令就搞定的。 没有下载的同学：npm install -g yo 。使用指令在自己需要的目录中：yo brian-gulp...由于我在使用过程中不太顺利 yo 构建项目时报错没解决了，所以只能搁置了有兴趣的同学可以自己研究（成功了顺便告诉我问题在哪里，我用的win10系统）

提醒：要把自己的npm发布的同学注意注意自己的npm连接的是哪里哦，只有npm自己的连接才能发布。



#### vue 基础

##### mvvm

- MVVM （Model-view-viewmodle）是一种软件架构模式。
- 模型、视图、视图模型。
- 三大框架都是这样的设计模式。

##### vue-cli

在vue的官网上 https://cli.vuejs.org/zh/guide/ 已经给出很详细的操作，此处不细表。

ok开始把直接搭建的实验项目，vue create 【给你的项目名】完事会提示你，选择默认配置还是自己选择些配置，来看了来看了#后面给出简单解释了：

- Babel	# 在项目中使用es6语法可能有些浏览器还没有实现所以兼容性问题，给没实现一些语法的浏览器解释翻译成es5。

- TypeScript     # 顾名思义如果项目使用的是ts语法就需要选上了。

- Progressive Web App (PWA)     # 是不渐进式开发的应用。PWA可以将web和app各自的优势融合在一起，实现类似app的交互。

- Router    #使用到路由功能。

- Vuex    #单项数据流或者是状态管理的一个组件，我还喜欢较它商店（store）。

- CSS Pre-processors    css预编译语言。

- Linter / Formatter    用来监视你的代码符合不符合它的规范的，你懂的。

- Unit Testing    单元测试。

- E2E Testing     E2E测试。

  ​	
vue-cli 3以上的朋友查看自己的项目配置可以 vue inspect > output.js

初学者注意这里时上下键选择用空格选中。

很多东西我也不是很熟有时间整理吧，建议大家也可以试试 vue ui 构建一个项目，广大学友有兴趣话也可以留言给我一块研究整理。