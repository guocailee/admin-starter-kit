// import style dependence
import 'bootstrap-loader'
import 'font-awesome-webpack'
// 引入依赖
import 'angular'
import 'angular-animate'

import './../app/theme/components/header/header.module.js'
import './../app/theme/components/footer/footer.module.js'

angular.module('zk.app', [
  'zk.theme.components.header',
  'zk.theme.components.footer'
])
