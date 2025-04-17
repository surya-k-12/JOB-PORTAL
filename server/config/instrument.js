// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
// import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://50f9834798b49eb9dfb282893f57dd32@o4509164112379904.ingest.us.sentry.io/4509164127387648",

  integrations: [
    Sentry.mongooseIntegration()
  ]
});