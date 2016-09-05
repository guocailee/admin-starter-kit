/**
 * @author: guocailee
 * @date: 2016-08-11
 */
import user from 'components/user/user.module'
import software from 'components/software/software.module'
import softtype from 'components/softtype/softtype.module'
import indexComponents from 'components/index/index.components.module.js'
import colorConfig from './config/md-color.config'
import zkIndexCtrl from './index.ctrl'
let index = angular.module('zk.index', ['ngAnimate',
  'ngMaterial',
  'pascalprecht.translate',
  indexComponents,
  user,
  software,
  softtype
])
index.config(colorConfig)
index.controller('zkIndexCtrl', zkIndexCtrl)
export default index.name
