const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      builderOptions: {
        asar:false
      }
    }
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    target:"electron-renderer",

  
  }


})
