/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import './main.scss'
import main from './main.directive'

export default angular.module('index.components.main', [])
  .directive('zkMain', main).name
