/**
 *  @author guocailee
 *  @Date   2016-07-20
 */
import './footer.scss'
import footer from './footer.directive'

export default angular.module('index.components.footer', [])
  .directive('zkFooter', footer).name
