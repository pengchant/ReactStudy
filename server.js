// 使用express框架结合webpack-dev-middleware来创建开发环境

const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const app = express()
const config = require("./webpack.config.js")
const complier = webpack(config)

// 告诉express 去使用webpack-dev-middleware 并且使用webpack.config.js
// ./webpack.config.js作为基础配置
app.use(webpackDevMiddleware(complier,{
    publicPath:config.output.publicPath
}));

// 修改端口号
app.listen(3000,function(){
    console.log("express app 监听端口为3000!\n")
})