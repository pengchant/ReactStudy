//基于NODE.JS的开发环境(使用webpack-dev-sever)

const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.config.js");
const options = {
    contentBase:'./dist',
    hot:true,
    host:"localhost"
};

webpackDevServer.addDevServerEntrypoints(config,options);
const complier = webpack(config);
const server = new webpackDevServer(complier,options);

// 监听5000的端口号
server.listen(5000,'localhost',()=>{
    console.log("dev server listening on port 5000");
});
