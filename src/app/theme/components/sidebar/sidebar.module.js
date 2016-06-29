/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import sidebarService from './sidebar.service'
import sidebarCtrl from './sidebar.controller'
import sidebarDirective from './sidebar.directive'
import sidebarHelper from './sidebar-helpers.directive'
const sidebar = angular.module('zk.theme.components.sidebar', [])
sidebar.provider('sidebarService', sidebarService)
sidebar.controller('sidebarCtrl', sidebarCtrl)
sidebar.directive('zkSidebar', sidebarDirective)

sidebar.directive('zkSidebarToggleMenu', sidebarHelper.zkSidebarToggleMenu)
  .directive('zkUiSrefToggler', sidebarHelper.zkUiSrefToggler)
  .controller('zkSidebarTogglingItemCtrl', sidebarHelper.zkSidebarTogglingItemCtrl)
  .directive('zkUiSrefTogglingSubmenu', sidebarHelper.zkUiSrefTogglingSubmenu)
  .directive('zkSidebarTogglingItem', sidebarHelper.zkSidebarTogglingItem)
  .directive('zkSidebarCollapseMenu', sidebarHelper.zkSidebarCollapseMenu)
