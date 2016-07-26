# 后台前端开发文档

## 1. 概述

### 1.1. 依赖说明
1. 操作系统
> 并无特殊要求，但以体验上来说，Linux/Unix 优于 Windows
2. NodeJS
> 请到[NodeJS](https://nodejs.org/en/)下载最新版进行安装。

```bash
# 安装完成后，打开CMD/Terminal，运行
node -v # 查看node版本，检查是否正常安装
npm -v  # 查看对应的node包管理器版本

```
3. cnpm安装
> 由于npm使用国外资源，所以稳定性不佳。请用cnpm替换npm作为node的包管理器。详情请看:[cpm](https://npm.taobao.org/)

```bash
npm install cnpm -g # 安装cnpm
```


4. bower安装
>  bower是前端资源管理工具，如JQueryJS， AngularJS等等都是通过bower下载安装。

```bash 
cnpm install bower -g # 安装Gulp
```

5. 项目依赖安装
> 在项目根地址执行，如下命令进行安装即可。

```bash
bower install # 安装前端依赖
# 此过程中，会询问需要安装的AngularJS版本号，请选择1.4.8版本即可。

cnpm install  # 安装工具依赖
```

***At last:***
由于项目用到scss，对其进行编译需要node-sass这个这个组件，底层依赖Python，所以在Windows环境下，需要安装[Python](https://www.python.org/)

### 1.2 命令

* gulp build
> 打包前端代码主要作用如下：
1. 把.src/app目录下的JS扫描出来，并注入到html文件中。
2. 对JS文件进行合并，压缩。
3. 对SCSS文件进行编译，压缩。

 
* gulp serve
> 启动服务器，以便可以在浏览器访问开发

### 1.3 目录结构说明
目录结构及说明如下:

```
.
├── src                                // 项目编写源码位置
│   ├── app                            // 除SCSS外的代码位置，按业务类型划分文件
│   │   ├── base                       // 基础模块文件夹，定义基础的配置
│   │   │   ├── config                 // 基础的配置，如国际化配置
│   │   │   ├── filter                 // 基础的过滤器配置
│   │   │   ├── services               // 基础服务，不依赖除Angularjs API之外的任何服务
│   │   │   ├── utils                  // 基础工具类，如fetchUtil,validateUtil等
│   │   │   ├── base.constants.js      // 基础的常量配置
│   │   │   └── base.module.js         // 基础模块的定义
│   │   ├── pages                      //页面的代码文件,  如果还有子页面/模块，应该在对应的目录下创建子目录
│   │   │   ├── dashboard              // 以首页为例
│   │   │   │   ├──noticeList          // 公告模块
│   │   │   │   │   ├── noticeList.directive.js   // 公告模块指令
│   │   │   │   │   ├── noticeList.service.js     // 公告模块服务
│   │   │   │   │   ├── noticeList.ctrl.js        // 公告模块控制器
│   │   │   │   │   ├── noticeList.html           // 公告模块页面
│   │   │   │   └── dashboard.module.js           // 首页页面定义
│   │   │   └── page.module.js                    // 页面模块的定义
│   │   ├── theme                                 // 有关主题的代码
│   │   │   ├── components                        // 与主题有关的组件，如，header, sidebar用于页面的显示
│   │   │   │   ├── backTop                       // 回到顶部的按钮
│   │   │   │   ├── baPanel                       // 面板
│   │   │   │   ├── baSidebar                     // 菜单
│   │   │   │   ├── baWizard                      // 向导
│   │   │   │   ├── contentTOp                    // 每个页面内容的顶部
│   │   │   │   ├── noData                        // 当列表无数据时显示
│   │   │   │   ├── pageTop                       // 页面的顶部
│   │   │   │   ├── widgets                       // 插件
│   │   │   │   └──components.module.js           
│   │   │   ├── directive                         // 与主题有关的指令，与组件类似，只是不需要html定义，如 <input> 的auto-focus
│   │   │   ├── filters                           // 主题的过滤器
│   │   │   ├── services                          // 主题的服务，提供比如，查看当前菜单是否收缩的服务
│   │   │   ├── theme.config.js                   // 主题的配置
│   │   │   ├── theme.constants.js                // 主题常量的配置
│   │   │   ├── theme.run.js                      // 主题启动时运行
│   │   │   ├── theme.service.js                  // 主题主服务
│   │   │   └── theme.module.js                   //  主题模块定义
│   │   └── app.js                              　// 程序主入口
│   ├── assets                                    // 纯静态文件目录
│   │   ├── fonts                                 // 字体目录
│   │   └── img                                   // 图片目录
│   ├── sass                                      // Sytles的代码位置,目结构与app类似
│   ├── index.html 
│   ├── 404.html
│   ├── reg.html
│   └── auth.html
├── gulp          // 具体gulp任务配置
├── .jshintrc     // JS风格检测文件
├── .stylelintrc  // SASS风格检测配置
├── bower.json    // 前端依赖配置文件
├── gulpfile.js   // gulp配置主文件 
└── package.json  // 项目依赖配置文件
```
> 所有的模块应该以业务进行划分，每个模块应该按 module, directive, service, controller,template(即html) config, run等进行编写(有则写，无则不需要)
