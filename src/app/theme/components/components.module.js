/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import './sidebar/sidebar.module'
import './panel/panel.module'
import './widgets/widgets.module'
import './wizard/wizard.module'
import './page-top/page-top.module'
import './content-top/content-top.module'
import './preloader/preloader.module'
let components = angular.module('zk.theme.components', [
  'zk.theme.components.sidebar',
  'zk.theme.components.panel',
  'zk.theme.components.widgets',
  'zk.theme.components.wizard',
  'zk.theme.components.pageTop',
  'zk.theme.components.preloader',
  'zk.theme.components.contentTop'
])

export default components.name
