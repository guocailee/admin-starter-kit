/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import './header.scss'
import header from './header.directive'
import headerService from './header.service'
export default angular.module('index.components.header', [])
  .factory('headerService', headerService)
  .directive('zkHeader', header).name
