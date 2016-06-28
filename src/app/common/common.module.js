import fetchUtil from './services/fetch.util'

const common = angular.module('zk.common', [])
common.factory('fetchUtil', fetchUtil)

export default common.name
