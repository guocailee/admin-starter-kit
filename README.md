# 后台前端开发文档

## 1. 概述

### 1.1. 依赖说明
* 操作系统

> 并无特殊要求，但以体验上来说，Linux/Unix 优于 Windows

* NodeJS

> 请到[NodeJS](https://nodejs.org/en/)下载最新版进行安装。

```bash
# 安装完成后，打开CMD/Terminal，运行
node -v # 查看node版本，检查是否正常安装
npm -v  # 查看对应的node包管理器版本

```

* cnpm安装

> 由于npm使用国外资源，所以稳定性不佳。请用cnpm替换npm作为node的包管理器。详情请看:[cpm](https://npm.taobao.org/)

```bash
npm install cnpm -g # 安装cnpm
```

* 项目依赖安装

> 在项目根地址执行，如下命令进行安装即可。

```bash
cnpm install  # 安装依赖
```

***At last:***
由于项目用到scss，对其进行编译需要node-sass这个这个组件，底层依赖Python，所以在Windows环境下，需要安装[Python](https://www.python.org/)

### 1.2 命令

* npm run build

> 打包前端代码

 
* npm run dev

> 启动服务器，以便可以在浏览器访问开发

# 2. 其他文档

* [Develop Guide](docs/develop-guide.md)
* [Angular Style Guide](docs/angular-style-guide.md)
* [ES6 Style Guide](docs/es6-style-guide.md)