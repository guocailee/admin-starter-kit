/**
 *  @author guocailee
 *  @Date   2016-06-29
 */
/**
 * import theme setting dependences
 */
import './components/components.module'

/**
 * import theme files
 */
import themeConfigProvider from './theme.configProvider'
import themeConfig from './theme.config'
import themeRun from './theme.run'
import themeService from './theme.service'
import themeConstants from './theme.constants'
import baUtil from './services/ba.util'
import fileReader from './services/fileReader'
import preloader from './services/preloader'

/**
 * zk.theme define
 *
 */
const theme = angular.module('zk.theme', [
  'zk.theme.components'
])

/**
 * zk.theme setting
 */
theme.provider('zkConfig', themeConfigProvider)
theme.config(themeConfig)
theme.constant('layoutSizes', themeConstants.layoutSizes)
  .constant('layoutPaths', themeConstants.layoutPaths)
  .constant('colorHelper', themeConstants.colorHelper)
theme.service('themeLayoutSettings', themeService)
theme.service('baUtil', baUtil)
theme.service('fileReader', fileReader)
theme.service('preloader', preloader)
theme.run(themeRun)

export default theme.name
