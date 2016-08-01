// import style dependence
import 'bootstrap-loader'
import 'font-awesome-webpack'
// 引入依赖
import 'angular'
import 'angular-animate'
import 'angular-route'
import 'angular-translate'
import 'angular-ui-bootstrap'

import './../app/theme/components/header/header.module.js'
import './../app/theme/components/footer/footer.module.js'

angular.module('zk.app', [
  'ngAnimate',
  'pascalprecht.translate',
  'ui.bootstrap',
  'zk.theme.components.header',
  'zk.theme.components.footer'
])
