/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import fetchUtil from './services/fetch.util'
import message from './config/message.config'

const common = angular.module('zk.common', [])
common.value('message', message)
common.service('fetchUtil', fetchUtil)

export default common.name
