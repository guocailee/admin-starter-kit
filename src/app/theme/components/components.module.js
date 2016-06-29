/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
import './sidebar/sidebar.module'
import './panel/panel.module'
import './widgets/widgets.module'
import './wizard/wizard.module'
angular.module('zk.theme.components', [
  'zk.theme.components.sidebar',
  'zk.theme.components.panel',
  'zk.theme.components.widgets',
  'zk.theme.components.wizard'
])
