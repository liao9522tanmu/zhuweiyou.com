const OfflinePlugin = require('offline-plugin')

module.exports = options => ({
  entry: './src/index.js',
  html: {
    template: './src/index.html'
  },
  webpack (config) {
    if (options.mode === 'production') {
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true,
          AppCache: false
        }
      }))
    }
    return config
  }
})
