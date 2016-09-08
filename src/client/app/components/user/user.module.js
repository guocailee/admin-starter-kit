/**
 *  @author guocailee
 *  @Date   2016-08-12
 */
import 'angular-cookies'
import common from '../common/common.module'
import userService from './user.service'

let user = angular.module('zk.user', [common, 'ngCookies'])
user.factory('userService', userService)

export default user.name
