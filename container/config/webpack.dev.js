const {merge} =require ('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
// const packageJson = require('../package.json')


const devConfig ={
    mode:'development',
    devServer:{
        port : 4000,
        historyApiFallback:{
            index :'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                sidebar: 'sidebar@http://localhost:4002/remoteEntry.js'
            },
          
        })
       
    ]
}

module.exports= merge(commonConfig,devConfig)