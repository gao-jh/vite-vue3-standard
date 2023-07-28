import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views',
      assets: '@/assets',
      common: '@/common',
      components: '@components',
      router: '@/router',
      store: '@/store',
    },
    // 省略文件后缀
    extensions: ['', '.ts', 'js', '.json', '.vue', '.scss', '.css'],
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 两种方式都可以
  //       additionalData: '@import "@/assets/scss/index.scss";'
  //       // additionalData: '@use "@/assets/scss/global.scss" as *;'
  //     }
  //   }
  // },
  server: {
    // 修改端口
    port: 3000,
  },
});
