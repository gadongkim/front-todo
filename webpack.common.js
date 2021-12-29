const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin/src/clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pathJoin = (targetPath) => path.join(__dirname, targetPath)

const tsConfigPath = pathJoin('./tsconfig.json')

module.exports = {
    mode: 'development',

    // tsconfig에 있는 alias import
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({configFile: tsConfigPath})],
    },

    entry: pathJoin('src/index.tsx'),

    output: {
        path: pathJoin('dist'),
        filename: '[name]-[chunkhash:10].min.js',
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
        },
    },

    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: './.babelrc',
                    },
                },
                exclude: /node_modules\/(?!recoil|axios)/,
            },
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'}), 
            new Dotenv(), 
            new CleanWebpackPlugin()
    ],
}
