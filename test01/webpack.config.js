const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        main: './src/index.js',
        vendor:[
            'lodash'
        ]
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor:{
                    chunks: "initial",
                    name: 'vendor',
                    minChunks:2
                },
                commons: {
                    chunks: 'initial',
                    name: 'commons',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        // 清理 /dist 文件夹
        // new CleanWebpackPlugin(['dist']) 编译会报错 去掉参数就好了 https://blog.csdn.net/qq_23521659/article/details/88353708
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // templateContent: "<!DOCTYPE html><html lang=\"zh\"><title>喜小帮</title><head><meta charset=\"UTF-8\"></head><body><div id=\"app\"></div></body></html>",
            // filename: "index.html",
            // inject: 'body',
            title: "喜小帮"
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
        // webpack.optimize.commonsChunkPlugin已被删除，请改用config.optimization.splitchunks。
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'manifest'
        // })

    ],
    output: {
        // filename: "bundle.js",
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};