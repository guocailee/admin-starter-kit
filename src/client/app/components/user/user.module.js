/**
 *  @author guocailee
 *  @Date   2016-08-12
 */
import common from '../common/common.module'
import userService from './user.service'

let user = angular.module('zk.user', [common])
user.factory('userService', userService)

export default user.name
