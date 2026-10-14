# NomadTime first-launch location privacy — October 11, 2026

C2/C3 scope: align the existing static NomadTime privacy page with the authorized 1.2.2 release. First launch starts with device timezone and requests optional foreground location; denial/manual selection and retained saved homes are explicit. No background tracking, new data collection, dependency or application change.

Source baseline e208237 on the isolated codex/nomadtime-location-privacy branch. The existing build:validate script passed prerender and SEO checks for all 18 routes. Initial sandbox server binding failed; rerunning the same script with local server access passed. Incidental install-generated yarn.lock changes were discarded. Validation log: /private/tmp/nomad-122-portfolio-build.log.

Existing production target verified: Vercel react-portfolio, prj_5lrG8wBbkPx8EsX5XVrH2zZspuhM, www.aliawilkinson.com. Ship this scoped static copy change through its PR; preserve the previous deployment for rollback. C4 requires public URL text verification after deployment. This report is not itself a deployment receipt. Existing portfolio-wide operational gaps are unchanged.
