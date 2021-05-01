const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//因为在项目过程中可能出现一些临时的文件，使用这个插件清楚不不必要的js、html等临时性的文件。
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = path.join(__dirname, './dist').split('\\').join('/');
console.log(paths)

const config = {
    /*提供 mode 配置选项，告知 webpack 使用相应环境的内置优化。string
可能的值有：none, development 或 production（默认）。*/
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index_bundle1.js",
        path: paths
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [//配置打包html文件
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugins({
            filename: "index.html",
            template: "./templateHTML/template.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.join(__dirname, "assets").split("\\").join("/"),
        //         to: "assets"
        //     }
        // ])
    ]
}

module.exports = config;


