const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    //入口
    entry: path.join(__dirname, './src/main.js'),

    //出口
    output: {
        path: path.join(__dirname, './src/dist'),
        filename: 'bundle.js'
    },
    //服务器配置
    devServer: {
        open: true,
        port: 3000,
        //配置代理,用来跨域
        proxy: {
            //使用： /api/movie/in_theaters  ==>
            //访问： http://api.douban.com/v2/movie/in_theaters

            '/api': {
                target: 'http://api.douban.com/v2/',
                //https请求需设置该项
                secure: false,
                //必须设置此项
                changeOrigin: true,
                //重写路径
                // /api/movie/in_theaters 重写为 /movie/in_theaters
                pathRewrite: { "^/api": "" }
            }
        }
    },
    //模块
    module: {
        //编译规则
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}