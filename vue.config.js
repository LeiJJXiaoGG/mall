module.exports = {
  configureWebpack: {
    resolve: {
      // 自动补全的扩展名
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
