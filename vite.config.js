import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;
// https://vitejs.dev/config/

export default defineConfig({
    base: '/vue-my-cookbook/',
    define: {
        'process.env': {},
    },
    server: {
        port: 8080,
    },
    plugins: [
        vue(),
        Components({
            resolvers: [VuetifyResolver()],
        }),
    ],
    resolve: {
        alias: [
            { find: '@/', replacement: REPLACEMENT },
            { find: 'src/', replacement: REPLACEMENT },
        ],
    },
});
