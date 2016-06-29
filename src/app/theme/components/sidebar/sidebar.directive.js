/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import $ from 'jquery'
import zkSidebarHtmlUrl from 'ngtemplate!html!./sidebar.html'
export default function ($timeout, sidebarService, themeUtil, layoutSizes) {
  var jqWindow = $(window)
  return {
    restrict: 'E',
    templateUrl: zkSidebarHtmlUrl,
    controller: 'sidebarCtrl',
    link: function (scope, el) {
      scope.menuHeight = el[0].childNodes[0].clientHeight - 84
      jqWindow.on('click', _onWindowClick)
      jqWindow.on('resize', _onWindowResize)

      scope.$on('$destroy', function () {
        jqWindow.off('click', _onWindowClick)
        jqWindow.off('resize', _onWindowResize)
      })

      function _onWindowClick ($evt) {
        if (!themeUtil.isDescendant(el[0], $evt.target) &&
          !$evt.originalEvent.$sidebarEventProcessed &&
          !sidebarService.isMenuCollapsed() &&
          sidebarService.canSidebarBeHidden()) {
          $evt.originalEvent.$sidebarEventProcessed = true
          $timeout(function () {
            sidebarService.setMenuCollapsed(true)
          }, 10)
        }
      }

      // watch window resize to change menu collapsed state if needed
      function _onWindowResize () {
        var newMenuCollapsed = sidebarService.shouldMenuBeCollapsed()
        var newMenuHeight = _calculateMenuHeight()
        if (newMenuCollapsed !== sidebarService.isMenuCollapsed() || scope.menuHeight !== newMenuHeight) {
          scope.$apply(function () {
            scope.menuHeight = newMenuHeight
            sidebarService.setMenuCollapsed(newMenuCollapsed)
          })
        }
      }
      function _calculateMenuHeight () {
        return el[0].childNodes[0].clientHeight - 84
      }
    }
  }
}
