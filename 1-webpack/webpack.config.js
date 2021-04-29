const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const webpack = require("webpack");

const paths = path.join(__dirname, './dist').split('\\').join('/');
console.log(paths)

const config = {
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
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugins({
            filename: "index.html",
            template: "./templateHTML/template.html"
        }),
    ]
}

module.exports = config;

