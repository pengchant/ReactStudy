const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    // entry:'./src/index.js',
    entry:{
        // app:'./src/index.js',
        // print:"./src/print.js"

        // HMR
        app:'./src/index.js',
        // another:'./src/another-module.js'
    },
    // 用于开发过程中定位错误的出处,bundle.js<--->(a.js,b.js,c.js)
    devtool:'inline-source-map',
    // 开发的默认服务器
    devServer:{
        contentBase:'./dist',
        // HMR
        hot:true
    },
    // 安装的插件
    plugins:[
        // 对dist文件夹清空的插件(dist为文件夹)
        new CleanWebpackPlugin(['dist']),
        // html的插件
        new HtmlWebpackPlugin({
            title:"output management"
        }),

        //HMR
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        // 压缩js插件
        new UglifyJSPlugin(),

        // 阻止重复导入
        new webpack.optimize.CommonsChunkPlugin({
            name:"common"
        })        
    ],
    // 输出的文件
    output:{
        // filename:'bundle.js',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),

        // 动态引入
        chunkFilename:'[name].bundle.js',
        // 为了将webpack-dev-middleware和express结合使用
        publicPath:'/'
    },
    module:{
        rules:[
            {
                // 加载css                
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
                // 加载图片
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },{
                // 加载字体
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },{
                // 加载.csv .tsv文件
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },{
                // 加载.xml文件
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    }
}