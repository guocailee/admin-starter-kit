/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

import './panel.scss'
import panelService from './panel.service'
import panelDirective from './panel.directive'
import panelSelfDirective from './panel-self.directive'
const panel = angular.module('zk.theme.components.panel', [])
panel.factory('zkPanel', panelService)
  .directive('zkPanelSelf', panelSelfDirective)
  .directive('zkPanel', panelDirective).name
export default panel.name
