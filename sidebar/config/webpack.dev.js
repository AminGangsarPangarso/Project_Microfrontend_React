const {merge} = require ('webpack-merge')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
// const packageJson = require('../package.json')

  const  devConfig ={
    mode :'development',
    devServer:{
        port: 4002,
        historyApiFallback:{
            index :'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name :'sidebar',
            filename: 'remoteEntry.js',
            exposes:{
                './SidebarApp' :'./src/bootstrap'
            },
            

        }),

        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
  }

  module.exports = merge(commonConfig,devConfig)