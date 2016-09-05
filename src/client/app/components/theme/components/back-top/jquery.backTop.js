import jQuery from 'jquery'
jQuery.fn.backTop = function (option) {
  var ts = this
  var cssOption = jQuery.extend({
    position: 400,
    speed: 500,
    color: 'white'
  }, option)
  var position = cssOption.position
  var speed = cssOption.speed
  var color = cssOption.color
  ts.addClass(color || 'black')
  ts.css({
    right: 40,
    bottom: 40,
    position: 'fixed'
  })
  jQuery(document).scroll(() => {
    var scrollTop = jQuery(window).scrollTop()
    scrollTop >= position ? ts.fadeIn(speed) : ts.fadeOut(speed)
  })
  ts.click(() => {
    jQuery('html, body').animate({ scrollTop: 0 }, { duration: 1200 })
  })
}
