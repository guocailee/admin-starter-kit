## 
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
