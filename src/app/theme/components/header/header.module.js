/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import './header.scss'
import header from './header.directive'
angular.module('zk.theme.components.header', [])
  .directive('zkHeader', header)
