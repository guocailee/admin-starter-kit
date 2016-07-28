## 开发说明

### 1. 目录结构说明
目录结构及说明如下:

```
.
├── src                                // 项目编写源码位置
│   ├── app                            // 除SCSS外的代码位置，按业务类型划分文件
│   │   ├── common                       // 基础模块文件夹，定义基础的配置
│   │   │   ├── config                 // 基础的配置，如国际化配置
│   │   │   ├── filter                 // 基础的过滤器配置
│   │   │   ├── services               // 基础服务，不依赖除Angularjs API之外的任何服务
│   │   │   ├── utils                  // 基础工具类，如fetchUtil,validateUtil等
│   │   │   ├── base.constants.js      // 基础的常量配置
│   │   │   └── base.module.js         // 基础模块的定义
│   │   ├── pages                      //页面的代码文件,  如果还有子页面/模块，应该在对应的目录下创建子目录
│   │   │   ├── dashboard              // 以首页为例
│   │   │   │   ├── dashboard.directive.js        // 首页模块指令
│   │   │   │   ├── dashboard.service.js          // 首页模块服务
│   │   │   │   ├── dashboard.ctrl.js             // 首页模块控制器
│   │   │   │   ├── dashboard.scss                // 首页模块Style
│   │   │   │   ├── dashboard.html                // 首页模块页面
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
│   │   │   └── theme.module.js                   // 主题模块定义
│   │   ├── index.html 
│   │   ├── 404.html
│   │   ├── reg.html
│   │   └── auth.html
│   ├── assets                                    // 纯静态文件目录
│   │   ├── fonts                                 // 字体目录
│   │   └── img                                   // 图片目录
│   ├── entrys                                    // webpack代码入口
│   ├── build                                     // webpack配置文件
|   ├── config                                    // node enve配置
│   ├── styles                                    // Sytles的代码位置,目结构与app类似,只能包含共用的styles,如Variables,Mixins 

├── .babelrc        // Babel配置
├── .bootstraprc    // Bootstrap-loader配置
├── .eslintignore   // ESlint忽略配置
└── .eslintrc.js    // ESlint配置
```
> 所有的模块应该以业务进行划分，每个模块应该按 module, directive, service, controller,template(即html) config, run等进行编写(有则写，无则不需要)
