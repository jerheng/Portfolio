const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue').default
const path = require('path')

module.exports = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
})
