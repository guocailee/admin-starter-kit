/**
 * @author: guocailee
 * @date: 2016-08-11
 */

import './index.scss'
import header from 'components/theme/components/header/header.module.js'
import footer from 'components/theme/components/footer/footer.module.js'
import main from 'components/theme/components/main/main.module.js'
import zkIndexCtrl from './index.ctrl'
let index = angular.module('zk.index', ['ngAnimate',
  'pascalprecht.translate',
  header,
  footer,
  main
])
index.controller('zkIndexCtrl', zkIndexCtrl)
export default index.name
