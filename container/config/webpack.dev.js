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
                sidebar: 'sidebar@http://localhost:4002/remoteEntry.js',
                navbar: 'navbar@http://localhost:4001/remoteEntry.js',
                footer: 'footer@http://localhost:4003/remoteEntry.js',
                product: 'product@http://localhost:4007/remoteEntry.js',
            },
          
        })
       
    ]
}

module.exports= merge(commonConfig,devConfig)