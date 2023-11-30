import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_LARAVEL_DSN,
    environment: import.meta.env.APP_ENV,
    tracesSampleRate: import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE,
    replaysSessionSampleRate: import.meta.env.VITE_REPLAY_SESSIONS_SAMPLE_RATE,
    replaysOnErrorSampleRate: import.meta.env.VITE_REPLAY_ERRORS_SAMPLE_RATE,
    integrations: [
        new Sentry.BrowserTracing({
            tracingOrigins: [import.meta.env.APP_URL, /^\//]
        }),
        //new Sentry.Replay({})
    ],
});
