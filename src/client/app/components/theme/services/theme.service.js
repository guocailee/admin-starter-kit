/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
export default function (zkConfig) {
  'ngInject'
  var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase())
  var mobileClass = isMobile ? 'mobile' : ''
  var blurClass = zkConfig.theme.blur ? 'blur-theme' : ''
  angular.element(document.body).addClass(mobileClass).addClass(blurClass)
  return {
    blur: zkConfig.theme.blur,
    mobile: isMobile
  }
}
