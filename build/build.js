// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  编译后的文件，只能在托管在HTTP  Server\n' +
  '  如果文件管理中打开index.html,如:file:// 是会有些资源无法加载的\n'
)
console.warn(
  '  请在编译成功后，执行npm run dist，并打开浏览器查看编译后的文件运行是否有误\n'
)

var spinner = ora('开始为生产环境编译文件...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'src/assets/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
