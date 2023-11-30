import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import { sentryVitePlugin } from "@sentry/vite-plugin";
import inject from "@rollup/plugin-inject";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            inject({
                $: 'jquery',
                jQuery: 'jquery',
            }),
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/scss/utils.scss',
                    'resources/js/app.js'
                ],
                refresh: true,
            }),
            env.APP_ENV === 'production' ? sentryVitePlugin({
                org: env.SENTRY_ORG,
                project: env.SENTRY_PROJECT,

                include: "./dist",

                authToken: env.SENTRY_AUTH_TOKEN,

                release: env.APP_RELEASE,
            }) : [],
        ],
        build: {
            sourcemap: true,
        },
    }
});
