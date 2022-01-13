/* eslint-disable prettier/prettier */
import { ProxyOptions } from 'vite';
const proxy: Record<string, string | ProxyOptions> = {
  // 字符串简写写法
//   '/foo': 'http://localhost:4567',
  // 选项写法
//   '/api': {
//     target: 'http://jsonplaceholder.typicode.com',
//     changeOrigin: true,
//     rewrite: (path) => path.replace(/^\/api/, ''),
//     // 更多请参看：https://cn.vitejs.dev/config/#server-proxy
//   },
};
export default proxy;
