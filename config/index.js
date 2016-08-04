// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  entrys: {
    app: './src/entrys/home.js',
    signin: './src/entrys/signin.js',
    index: './src/entrys/index.js'
  },
  htmlPlugins: [{
    filename: 'home.html',
    chunks: ['app'],
    template: 'src/app/home.html',
    inject: true
  }, {
    filename: 'index.html',
    template: 'src/app/index.html',
    inject: true,
    chunks: ['index'],
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }, {
    filename: 'signin.html',
    chunks: ['signin'],
    template: 'src/app/signin.html',
    inject: true
  }],
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 4000,
    proxyTable: {}
  }
}
