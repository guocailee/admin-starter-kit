/**
 *  @author guocailee
 *  @Date   2016-08-12
 */
import common from 'components/common/common.module'
import menuService from './menu.service'

let menu = angular.module('zk.menu', [common])
menu.factory('menuService', menuService)

export default menu.name
