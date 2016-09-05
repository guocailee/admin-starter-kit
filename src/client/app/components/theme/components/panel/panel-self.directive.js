/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (zkPanel) {
  'ngInject'
  return angular.extend({}, zkPanel, {
    link: function (scope, el, attrs) {
      el.addClass('panel panel-white')
      if (attrs.baPanelClass) {
        el.addClass(attrs.baPanelClass)
      }
    }
  })
}
