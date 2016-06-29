/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function () {
  return {
    restrict: 'A',
    transclude: true,
    template: function (elem, attrs) {
      var res = '<div class="panel-body" ng-transclude></div>'
      if (attrs.zkPanelTitle) {
        var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.zkPanelTitle + '</h3></div>'
        res = titleTpl + res // title should be before
      }

      return res
    }
  }
}
