/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import $ from 'jquery'
import zkSidebarHtmlUrl from 'ngtemplate!html!./zk-sidebar.html'
export default function ($timeout, zkSidebarService, baUtil, layoutSizes) {
  var jqWindow = $(window)
  return {
    restrict: 'E',
    templateUrl: zkSidebarHtmlUrl,
    controller: 'zkSidebarCtrl',
    link: function (scope, el) {
      scope.menuHeight = el[0].childNodes[0].clientHeight - 84
      jqWindow.on('click', _onWindowClick)
      jqWindow.on('resize', _onWindowResize)

      scope.$on('$destroy', function () {
        jqWindow.off('click', _onWindowClick)
        jqWindow.off('resize', _onWindowResize)
      })

      function _onWindowClick ($evt) {
        if (!baUtil.isDescendant(el[0], $evt.target) &&
          !$evt.originalEvent.$sidebarEventProcessed &&
          !zkSidebarService.isMenuCollapsed() &&
          zkSidebarService.canSidebarBeHidden()) {
          $evt.originalEvent.$sidebarEventProcessed = true
          $timeout(function () {
            zkSidebarService.setMenuCollapsed(true)
          }, 10)
        }
      }

      // watch window resize to change menu collapsed state if needed
      function _onWindowResize () {
        var newMenuCollapsed = zkSidebarService.shouldMenuBeCollapsed()
        var newMenuHeight = _calculateMenuHeight()
        if (newMenuCollapsed !== zkSidebarService.isMenuCollapsed() || scope.menuHeight !== newMenuHeight) {
          scope.$apply(function () {
            scope.menuHeight = newMenuHeight
            zkSidebarService.setMenuCollapsed(newMenuCollapsed)
          })
        }
      }
      function _calculateMenuHeight () {
        return el[0].childNodes[0].clientHeight - 84
      }
    }
  }
}
