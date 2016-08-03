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
import themeService from './services/theme.service'
import themeConstants from './theme.constants'
import themeUtil from './services/theme.util'
import fileReader from './services/fileReader'

import appImage from './filters/image/app-image'
import kameleonImg from './filters/image/kameleon-img'
import profilePicture from './filters/image/profile-picture'
import plainText from './filters/text/remove-html'
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

theme.filter('appImage', appImage)
theme.filter('kameleonImg', kameleonImg)
theme.filter('profilePicture', profilePicture)
theme.filter('plainText', plainText)

theme.service('themeLayoutSettings', themeService)
theme.service('themeUtil', themeUtil)
theme.service('fileReader', fileReader)

theme.run(themeRun)
var error = []
export default theme.name

