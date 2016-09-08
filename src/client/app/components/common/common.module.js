/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import 'angular-validation'
import validationCofig from './config/validation-rule.config'
import fetchUtil from './services/fetch.util'
import message from './config/message.config'

const common = angular.module('zk.common', ['validation'])
common.value('message', message)
common.service('fetchUtil', fetchUtil)
common.config(validationCofig)

export default common.name
