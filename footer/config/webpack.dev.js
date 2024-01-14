const {merge} = require ('webpack-merge')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')


const devConfig ={
    mode :'development',
    devServer:{
        port : 4003,
        historyApiFallback:{
            index :'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'footer',
            filename :'remoteEntry.js',
            exposes:{
                './FooterApp' :'./src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template :'./public/index.html'
        })
    ]
}

module.exports= merge(commonConfig,devConfig)