// https://github.com/shelljs/shelljs
require('shelljs/global')

var config = require('../config')
var ora = require('ora')

var spinner = ora('clean builded files')
spinner.start()

rm('-rf', config.build.assetsRoot)
spinner.stop()
