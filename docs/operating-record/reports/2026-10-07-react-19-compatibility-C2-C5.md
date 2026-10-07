# React 19 compatibility: C2/C5 checkpoint

Recorded 2026-10-07 UTC by Codex. Product: `product:alia-wilkinson-website`; scope: browser app dependency graph in [PR #54](https://github.com/aliawilkinson/react-portfolio/pull/54), based on Dependabot source `ae7b8d93642414edb60a4d80ad045eb728675eae` and inspected main `97f3c6e9ac33333236d9d9d6b5519cb41b74de56`. This is source verification in an isolated checkout; release owner review and hosted checks remain separate.

## Problem and change

The grouped update selected React/React DOM and their types at 19.3.0, but Framer Motion 8.5.5 requires React 18. Both the [GitHub Test install](https://github.com/aliawilkinson/react-portfolio/actions/runs/37580506652) and [Vercel preview install](https://vercel.com/aliawilkinsons-projects/react-portfolio/5MsTvtokMDBinJ5QZxysoy4VuZea) stopped with the same `ERESOLVE` peer conflict before testing/building.

Pin Framer Motion 11.18.2, the final v11 patch with published React 18/19 peer support, and refresh its graph in both retained lockfiles. Existing `framer-motion` imports and application behavior remain unchanged. The [official migration guide](https://motion.dev/docs/react-upgrade-guide) identifies v9 keyboard/focus behavior, v10 IntersectionObserver and removed `exitBeforeEnter`, and v11 render scheduling/velocity changes. Source uses modern-browser `whileInView`, existing `mode="wait"` and ordinary motion components; no deprecated `exitBeforeEnter` or custom velocity calculation was found. No peer override, forced install, check disabling, or unrelated package update is introduced.

## Verification

Node 24.19.0, npm 11.19.1; verification performed 2026-10-07 UTC.

| Check | Result and scope |
| --- | --- |
| `npm ci --no-audit --no-fund` | Passed clean dependency resolution without peer overrides. |
| `npm test` | Passed all 125 tests in 13 files, including the existing real Framer Motion deck interactions. |
| `npm ls react react-dom framer-motion` | Passed; one deduplicated React/React DOM 19.3.0 runtime, Framer Motion 11.18.2 and satisfied installed peer graph. |
| Yarn 1.22.22 frozen install | Passed lockfile resolution. Existing warning: Testing Library DOM is an npm-installed peer; npm remains the configured CI/Vercel installer. No package-manager migration is made. |
| `npm audit --json` | Reports the same 48 vulnerable packages as the original PR lock: 1 critical, 34 high, 12 moderate, 1 low. No added advisory package and no React/Framer/Motion advisory. Findings are not waived or described as clean. |
| `npm run build:validate` | Passed production bundle, all 13 Chromium prerenders, sitemap generation and SEO checks for 16 routes. Existing Sass deprecations and >500 kB bundle warning remain non-failing. |
| Built-app Chromium smoke | Passed `/`, `/projects`, `/blog`, `/tarot`, plus dark/light theme switching; no uncaught page errors. External requests and provider API calls were blocked. |
| Hosted PR Test and Vercel | Pending the fix push; prior failures retained above. |

The unrelated audit findings include the Vercel CLI dependency tree and dependencies being addressed in other open PRs. Package updates and merge order must be reconciled by the coordinating maintainer; this report does not certify portfolio-wide remediation. [Architecture](../architecture.md), [operations](../operations.md) and [recovery](../recovery.md) remain source-scoped records; this compatibility change adds no Component, target, data store or recovery mechanism.

## Release, recovery and follow-up

No manual deployment, promotion, API exercise or provider-setting change is part of this fix. The existing PR Git integration may produce a preview. The release owner must review the final combined main graph after the other dependency PRs land and confirm exact-head hosted results before merge. A regression is recovered by a reviewed compatible React/Framer version pair, not by ignoring peer resolution. Existing access, uptime, restoration and live-journey gaps remain in the [checklist](../checklist.md).

Signoff: **ship the compatibility fix for review; hold merge until the final combined dependency graph and exact-head hosted checks pass**. Local install, tests, production/prerender/SEO and isolated browser checks passed. The coordinator owns merge order and final review; existing audit findings stay explicit. No human approval or production readiness is inferred.
