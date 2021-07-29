module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'VUE3 BOLIERPLATE'
        return args
      })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/stylesheet/variables";'
      }
    }
  }
}
