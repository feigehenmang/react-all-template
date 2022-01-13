/* eslint-disable prettier/prettier */
import viteSvgIcons from 'vite-plugin-svg-icons';
import styleImport from 'vite-plugin-style-import';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import visualizer from 'rollup-plugin-visualizer';
import path from 'path'
import cssOptions from './config/css.options'
import { port, base, openBrowser, VITE_APP_CONSOLE, VITE_APP_DEBUGGER, VITE_APP_SOURCEMAP, VITE_APP_VISUALIZER } from './config/varible'
import proxyConfig from './config/proxy'
// https://vitejs.dev/config/
export default () => {
  // react add
  const plugins:any[] = [react()]
  // 打包分析
  if(VITE_APP_VISUALIZER) {
    plugins.push(visualizer({
      // 将打包的依赖分析可视化页面，写到node_modules中，这样不占位置
       filename: './node_modules/.cache/visualizer/stats.html',
       open: true,
       gzipSize: true,
       brotliSize: true,
     }))
  }
  // svg
  plugins.push(viteSvgIcons({
    iconDirs: [path.resolve(__dirname, 'src/icons')],
    symbolId: 'icon-[dir]-[name]',
  }))
  // ui组件 按需引入
  plugins.push(styleImport({
    libs: [
      {
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => {
          return `antd/es/${name}/style/index`;
        },
      },
    ],
  }))
  return defineConfig({
    base,
    plugins: plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_APP_CONSOLE,
          drop_debugger: VITE_APP_DEBUGGER,
        },
      },
      outDir: 'dist', // 指定输出路径目录
      assetsDir: 'assets', // 指定打包生成静态资源的存放路径目录
      sourcemap: VITE_APP_SOURCEMAP, // 构建后是否生成 source map文件
    },
    css: cssOptions,
    server: {
      host: true,
      port,
      open: openBrowser,
      proxy: proxyConfig
    }
  })
}
