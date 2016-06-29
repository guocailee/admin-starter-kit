/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import fetchUtil from './services/fetch.util'

const common = angular.module('zk.common', [])
common.factory('fetchUtil', fetchUtil)

export default common.name
