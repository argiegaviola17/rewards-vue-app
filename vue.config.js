module.exports = {
    devServer: {
        proxy: 'http://localhost:8080'
    },
    css: {
        loaderOptions: {
          scss: {
            additionalData: `@import '~@/assets/scss/include_media.scss';`,
          },
        },
    },
    assetsDir: '@/assets/',
}