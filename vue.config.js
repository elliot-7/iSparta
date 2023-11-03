const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    electronBuilder:{
      customFileProtocol: "./",
      nodeIntegration:true,
      builderOptions: {
        asar:false,
        mac: {
          "target": [
            {
              "target": "dmg",
              "arch": [
                "x64"
              ]
            }
          ],
          icon: "./public/icons/icon.icns"
        }
      }
    }
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    target:"electron-renderer",

  
  }


})
