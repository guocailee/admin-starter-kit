/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (zkPanel, zkConfig) {
  return angular.extend({}, zkPanel, {
    template: function (el, attrs) {
      var res = '<div  class="panel ' + (zkConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '')
      res += '" zoom-in ' + (zkConfig.theme.blur ? 'ba-panel-blur' : '') + '>'
      res += zkPanel.template(el, attrs)
      res += '</div>'
      return res
    }
  })
}
