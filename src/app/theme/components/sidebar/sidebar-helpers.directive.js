/**
 *  @author guocailee
 *  @Date   2016-06-29
 */

function zkSidebarToggleMenu (sidebarService) {
  return {
    restrict: 'A',
    link: function (scope, elem) {
      elem.on('click', function ($evt) {
        $evt.originalEvent.$sidebarEventProcessed = true
        scope.$apply(function () {
          sidebarService.toggleMenuCollapsed()
        })
      })
    }
  }
}

/** @ngInject */
function zkSidebarCollapseMenu (sidebarService) {
  return {
    restrict: 'A',
    link: function (scope, elem) {
      elem.on('click', function ($evt) {
        $evt.originalEvent.$sidebarEventProcessed = true
        if (!sidebarService.isMenuCollapsed()) {
          scope.$apply(function () {
            sidebarService.setMenuCollapsed(true)
          })
        }
      })
    }
  }
}

/** @ngInject */
function zkSidebarTogglingItem () {
  return {
    restrict: 'A',
    controller: 'zkSidebarTogglingItemCtrl'
  }
}

/** @ngInject */
function zkSidebarTogglingItemCtrl ($scope, $element, $attrs, $state, sidebarService) {
  var vm = this
  var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem)
  if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
    vm.$$expandSubmenu = function () { console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu') }
    vm.$$collapseSubmenu = function () { console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu') }

    var subItemsStateRefs = sidebarService.getAllStateRefsRecursive(menuItem)

    vm.$expand = function () {
      vm.$$expandSubmenu()
      $element.addClass('ba-sidebar-item-expanded')
    }

    vm.$collapse = function () {
      vm.$$collapseSubmenu()
      $element.removeClass('ba-sidebar-item-expanded')
    }

    vm.$toggle = function () {
      $element.hasClass('ba-sidebar-item-expanded') ? vm.$collapse() : vm.$expand()
    }

    if (_isState($state.current)) {
      $element.addClass('ba-sidebar-item-expanded')
    }

    $scope.$on('$stateChangeStart', function (event, toState) {
      if (!_isState(toState) && $element.hasClass('ba-sidebar-item-expanded')) {
        vm.$collapse()
        $element.removeClass('ba-sidebar-item-expanded')
      }
    })

    $scope.$on('$stateChangeSuccess', function (event, toState) {
      if (_isState(toState) && !$element.hasClass('ba-sidebar-item-expanded')) {
        vm.$expand()
        $element.addClass('ba-sidebar-item-expanded')
      }
    })
  }

  function _isState (state) {
    return state && subItemsStateRefs.some(function (subItemState) {
      return state.name.indexOf(subItemState) === 0
    })
  }
}

function zkUiSrefTogglingSubmenu ($state) {
  return {
    restrict: 'A',
    require: '^zkSidebarTogglingItem',
    link: function (scope, el, attrs, zkSidebarTogglingItem) {
      zkSidebarTogglingItem.$$expandSubmenu = function () { el.slideDown() }
      zkSidebarTogglingItem.$$collapseSubmenu = function () { el.slideUp() }
    }
  }
}

function zkUiSrefToggler (sidebarService) {
  return {
    restrict: 'A',
    require: '^zkSidebarTogglingItem',
    link: function (scope, el, attrs, baSidebarTogglingItem) {
      el.on('click', function () {
        if (sidebarService.isMenuCollapsed()) {
          // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
          // This should not affect mobiles, because on mobiles sidebar should be hidden at all
          scope.$apply(function () {
            sidebarService.setMenuCollapsed(false)
          })
          baSidebarTogglingItem.$expand()
        } else {
          baSidebarTogglingItem.$toggle()
        }
      })
    }
  }
}
export default {
  zkSidebarToggleMenu: zkSidebarToggleMenu,
  zkUiSrefToggler: zkUiSrefToggler,
  zkUiSrefTogglingSubmenu: zkUiSrefTogglingSubmenu,
  zkSidebarTogglingItemCtrl: zkSidebarTogglingItemCtrl,
  zkSidebarTogglingItem: zkSidebarTogglingItem,
  zkSidebarCollapseMenu: zkSidebarCollapseMenu
}
