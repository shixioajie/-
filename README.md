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
  使用 webstorm 打 debug

  - ![avatar](https://cdn.jsdelivr.net/gh/shixioajie/imgs/posts/c3715.png)
  - ![avatar](https://cdn.jsdelivr.net/gh/shixioajie/imgs/posts/16191681681.jpg)

- [VisualStudioCode]
  使用 Ctrl+Shift+p 打开指令示操作，如 settings、key、font。

### 记录

#### webpack

[使用默认选项配置] npm init -y
[局部安装] npm install webpack webpack-cli --save-dev (安装在开发模式下) 或 yarn add webpack webpack-cli -D
[查看版本]可以指令 `npx webpack --version` (webpack5 以后可以使用)
[全局安装]npm install webpack -g 或者 yarn global add webpack webpack-cli
[调用] npm run package.json scripts 等于的内容
