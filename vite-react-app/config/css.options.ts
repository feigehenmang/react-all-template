/* eslint-disable prettier/prettier */
import { CSSOptions } from 'vite';

const cssOptions: CSSOptions = {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
        },
        scss: {
            additionalData: "@import './src/styles/index.scss';",
        },
    },
}
export default cssOptions