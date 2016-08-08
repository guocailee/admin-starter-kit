import './../theme/components/header/header.module.js'
import './../theme/components/footer/footer.module.js'
import './main/main.module'
angular.module('zk.index', [
  'ngAnimate',
  'pascalprecht.translate',
  'ui.bootstrap',
  'zk.index.main',
  'zk.theme.components.header',
  'zk.theme.components.footer'
])
