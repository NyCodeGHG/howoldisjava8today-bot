# Manifests

This directory contains kubernetes manifests to deploy the application as a [Kubernetes CronJob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/).

When deploying, you also need to set the environment variables defined in [src/env.ts](src/env.ts) as a secret called `platform-credentials`.
