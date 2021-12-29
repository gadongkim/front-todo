const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            templateParameters: {
                mode: 'DEV',
            },
        }),
    ],

    devServer: {
        port: 8000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
})
