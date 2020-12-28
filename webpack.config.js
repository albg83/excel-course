const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry:'./index.js',
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }]

        })
    ]
}