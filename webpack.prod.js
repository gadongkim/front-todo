const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            templateParameters: {
                mode: 'PROD',
            },
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],

    optimization: {
        minimize: true,
    },
})

