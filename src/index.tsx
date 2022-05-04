import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


//process.env.NODE_ENV === "production" && 
Sentry.init({
  dsn: "https://bb51b759879a4fd09b96fe5c3ccc73e3@o1232369.ingest.sentry.io/6380381",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

