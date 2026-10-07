# Portfolio dependency batch: C2/C5 verification

Recorded 2026-10-07 UTC by Codex for `product:alia-wilkinson-website`. Scope: the eight reviewed Dependabot PRs [#52](https://github.com/aliawilkinson/react-portfolio/pull/52), [#53](https://github.com/aliawilkinson/react-portfolio/pull/53), [#54](https://github.com/aliawilkinson/react-portfolio/pull/54), [#55](https://github.com/aliawilkinson/react-portfolio/pull/55), [#56](https://github.com/aliawilkinson/react-portfolio/pull/56), [#57](https://github.com/aliawilkinson/react-portfolio/pull/57), [#58](https://github.com/aliawilkinson/react-portfolio/pull/58) and [#59](https://github.com/aliawilkinson/react-portfolio/pull/59). This report closes the local combined-source verification scope; exact-head GitHub and Vercel results remain the merge gate. The release owner controls normal serial merges. No provider settings, production promotion or recovery drill is performed by this report.

## Candidate and dependency changes

Original batch baseline: `97f3c6e9ac33333236d9d9d6b5519cb41b74de56`. The final candidate combines the reviewed toolchain and router histories with the React compatibility fix. Exact integration parents, tested dependency digests and results are recorded below.

| PR | Final dependency scope |
| --- | --- |
| #52 | Axios 1.20.0; retain source-map-js 1.2.2 during lock reconciliation |
| #53 | GitHub checkout/setup-node v7; Node 24 test workflow preserved |
| #54 | React/React DOM and their types 19.3.0; compatible Framer Motion 11.18.2 |
| #55 | Vite 8.3.2, plugin-react 6.1.1, Vitest 5.0.3 |
| #56 | react-router-dom/react-router 7.18.4 |
| #57 | fast-check 4.10.2 |
| #58 | JSDOM 30.1.1 |
| #59 | Existing transitive brace-expansion ranges resolved to 1.1.21 and 5.0.12 |

The React bot update originally failed installation in both GitHub and Vercel because Framer Motion 8 required React 18. [The earlier compatibility report](2026-10-07-react-19-compatibility-C2-C5.md) retains the diagnosis and standalone verification. The final Framer pin satisfies React 19 peers without forced/legacy resolution. The dependency integration preserves all preceding updates and both lockfiles; test source, assertions and application source are unchanged. README reflects the actual dependency versions; its local `.nvmrc` pin remains distinct from the Node 24.19.0 verification runtime.

## Combined verification

Tested source: `31e4bd02ec8f14f292361a9ce75fa72be93102d6`, integrating reviewed Router #56 `5aadf007d1d962ed1eaeba2954c9a48b493ebf24` and merged main `c3e9842746a507c15d5453eb62d0b90589bb0235`. Subsequent changes in this PR update documentation only. [The dated evidence projection](2026-10-07-dependency-batch-evidence.json) retains dependency-file SHA-256 values, audit dates/package findings and browser checks.

| Check | Actual result |
| --- | --- |
| Node 24.19.0 / npm 11.19.1 `npm ci --no-audit --no-fund` | Passed; audit run separately. No forced resolution or peer bypass. |
| `npm test` on Vitest 5.0.3 / JSDOM 30.1.1 | All 125 tests in 13 files passed. Source, assertions, configuration and `.nvmrc` match the original main baseline. |
| `npm ls react react-dom framer-motion react-router-dom vite vitest` | Passed installed peer graph with the intended single React 19 runtime. |
| Manifest/npm-lock and Yarn semantics | Passed 604 parsed selectors and 655 required edges with compatible ranges, including prior Axios/source-map/brace-expansion updates. Optional cross-platform native installations are outside this check. npm-generated Yarn formatting/selector churn was restored to the reviewed merged lock; all three dependency-file hashes match the tested candidate. |
| `npm run build:validate` | Production bundle, 13 actual Chromium prerenders, 16 SEO routes and sitemap passed. Existing Sass deprecations and >500 kB bundle warning remain visible. |
| Local Chromium browser verification | All 28 declared routes and 36 checks passed: dynamic slugs, not-found content, four legacy redirects, SPA links, back/forward, replacement history, shell changes, home-section links, dark/light theme changes and lazy Tarot load. Zero uncaught browser exceptions; external traffic and API requests blocked. |
| Whitespace, scoped documentation links/diagrams | Passed; no source/test changes needed for these compatibility updates. |

At report preparation, seven batch PRs have merged normally; #54 is the final proposed merge. Local verification does not substitute for the final pushed head's hosted Test and Vercel results.

## Security comparison and limits

Dated `npm audit --json` baseline capture at 2026-10-07T06:36:05.882389+00:00 found 48 affected package entries: 1 critical, 34 high, 12 moderate and 1 low. This is the npm audit dependency-graph count, not a GitHub alert count or count of reachable application vulnerabilities. At 2026-10-07T06:40:43.026148+00:00, the combined candidate reports **37 affected package entries: 1 critical, 28 high, 7 moderate and 1 low**. Audit exits nonzero. No newly affected package was added. The 11 removed entries are `@remix-run/router`, `@vitest/mocker`, `axios`, `brace-expansion`, `form-data`, `nanoid`, `postcss`, `react-router`, `react-router-dom`, `vite` and `vitest`.

Remaining findings primarily involve the Vercel CLI dependency tree and other unchanged transitive packages. The critical `tar@7.5.7` finding is still reachable in the installed CLI graph through `vercel@59.1.4` → `@vercel/fun@1.3.0` (and a second backend tooling path); this is dependency reachability, not a runtime exploitability assessment. The evidence projection retains each remaining package and advisory chain. The maintainer owns a separate compatible remediation/review of those findings before claiming security closure. No advisory was waived, suppressed, or hidden; this batch is not a clean-security certification.

## Maintenance and signoff

Architecture, Components, data stores, secret boundaries and deployment targets do not change. Keep the existing [operations](../operations.md), [recovery](../recovery.md) and [checkpoint gaps](../checklist.md). Future React updates must consider Framer Motion's declared peers; future routing/toolchain updates must repeat the route and prerender checks. Recover a dependency regression through a reviewed compatible version pair/graph and normal release evidence, never by ignoring peer requirements.

Signoff: **ship the scoped dependency batch for final exact-head review**; local combined verification passed and existing audit findings remain open. Approval, final hosted checks, actual merge and automatic preview/production receipts are separate evidence. These local results do not close C4 delivery or C5 restore/handoff gaps.
