var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
module.exports = {
    context: __dirname + "/app",
    entry: {
        app: __dirname + '/app/script/app.js',
        vendors: ['angular', 'angular-animate', 'angular-material']
    },
    output: {
        // Absolute output directory
        path: __dirname + "/build",

        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: __dirname + "/build/",

        // Filename for entry points
        // Only adds hash in build mode
        filename: '[name].bundle.[hash].js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: '[name].bundle.[hash].js'

    },
    externals: {
        "bundle!angular": "angular"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!postcss-loader!sass-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    },
    postcss: function() {
        return [autoprefixer(
            [
                'ie >= 10',
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 7',
                'opera >= 23',
                'ios >= 7',
                'android >= 4.4',
                'bb >= 10'
            ]
        )];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    devtool: 'source-map'
};
