# React Router 7 compatibility checkpoint — 2026-10-07

## Scope and provenance

- Product: `product:alia-wilkinson-website`; web Component, local production-build candidate.
- Milestone/checkpoints: Dependabot PR [#56](https://github.com/aliawilkinson/react-portfolio/pull/56), C2 implementation verification, C3 dependency compatibility and C5 maintenance.
- Inspected and executed revision: `a9b6e4ca0feaa449fa514362b547dda5bfc68713`, based on `97f3c6e9ac33333236d9d9d6b5519cb41b74de56`. This report-only follow-up does not change application code or the dependency candidate.
- Candidate: `react-router-dom` and `react-router` 7.18.4, replacing 6.30.3. React/ReactDOM remain 18.3.1 in this candidate; the separate React 19 PR is outside this report's tested graph.
- Verification: Codex, 2026-10-07 UTC; Node 24.19.0, local Chrome 154.0.8037.98. Original user and coordinating checkouts were untouched.
- Next checkpoint: coordinating maintainer verifies the final combined dependency graph and current hosted checks before its serialized merge. No human review date is invented.

## Compatibility review

The [official version-specific v6→v7 guide](https://reactrouter.com/7.18.4/upgrading/v6) sets Node 20 and React/ReactDOM 18 as minimums; this candidate meets them. The application uses declarative `BrowserRouter` with `Routes`, `Route`, `Navigate`, `Link`, `useParams`, `useLocation` and `useNavigate`.

| Migration concern | Evidence in this application | Disposition |
| --- | --- | --- |
| Relative splat behavior | `src/App.jsx` has flat absolute paths and parameter routes, with no splat path | No relative-splat migration applies |
| Transition/lazy behavior | `Tarot = lazy(...)` is declared at module scope, outside `App` | Existing structure is compatible; lazy route rendered in browser verification |
| Fetcher lifetime, form method, action revalidation and partial hydration | No data-router `RouterProvider`, loaders/actions, fetchers, router forms or hydration fallback | Those data-router migrations do not apply |
| Removed `json`/`defer` helpers | No imports or calls to those router helpers | No replacement needed |
| Package imports | Existing `react-router-dom` imports are still re-exported by the [7.18.4 package entry point](https://github.com/remix-run/react-router/blob/react-router%407.18.4/packages/react-router-dom/index.ts) | Retained the compatibility package; no unrelated import/package rewrite |
| Prerendering | Existing Puppeteer process renders the client application; it is not a React Router data-router SSR implementation | Checked the actual build output and route metadata |

No application compatibility fix was required. The Dependabot manifest, npm lockfile and Yarn lockfile changes remain its original scoped update. `npm ci` temporarily rewrote unrelated Yarn entries with the local npm version; that generated churn was restored to the reviewed PR version and is not part of this change.

## Deliverables and verified checks

Commands ran with Node 24 first on `PATH`, the existing npm CLI, and `PUPPETEER_EXECUTABLE_PATH` pointing to local Chrome for the build. No deployment CLI was run.

| Check | Result and evidence |
| --- | --- |
| `npm ci --no-audit --no-fund` | Passed with the candidate's locked npm graph |
| `npm test` | **125 tests passed across 13 files** |
| `npm run build:validate` | Production Vite build passed; all **13 configured prerenders** completed; all **16 SEO routes and sitemap** passed. No swallowed prerender failure was present in the output |
| Production browser route check | **34 checks passed**, including all **28 declared route patterns** instantiated with representative valid slugs; no browser exceptions |
| Metadata spot check | About, MetadataDB, Product Factory and NomadTime case-study titles/canonical URLs matched their routes in generated HTML |
| Whitespace and source scope | `git diff --check` passed; application files and dependency files have no changes beyond the original Dependabot candidate |
| Hosted status at inspected revision | GitHub `Test`, Vercel and Vercel Preview Comments reported success; this is a check receipt, not a manual review of the hosted destination |

The browser check ran against the production preview on an ephemeral loopback port. It blocked external requests and submitted no AI/API or contact request. It checked these behaviors against the actual built application:

- All home/section aliases, projects and blog indexes, the known `music` project and `you-dont-have-to-rebase` article, every InfoPost/case-study route and lazy Tarot route render content.
- `/other-projects` resolves to `/projects`; `/other-projects/music` resolves to `/projects/music`; `/conversation` and `/tarot/conversation` resolve to `/tarot`.
- Missing project and blog slugs render their existing not-found messages.
- Blog links retain the same browser document; parameters, return links and browser Back/Forward render the expected page.
- The legacy project redirect replaces its history entry: Back returns to the preceding blog page rather than the legacy URL.
- `useLocation` continues to hide the portfolio shell on a project detail and restore it on return to the project list. Home section links retain the document and their scroll target.

The first browser harness run treated a valid cached HTTP 304 as a failure. Its HTTP assertion was corrected and cache disabled; the complete subsequent run passed. This was a test-harness correction, not an application change.

## Remaining scope and signoff

Vite reports the existing large-chunk warning (the main candidate chunk is about 512 kB uncompressed); it did not fail the build. This review does not assert compatibility of the separate React 19 upgrade, live API behavior, provider health, or completion of the broader operating-record release/recovery gaps. The coordinating maintainer must validate the final combined graph after the other dependency PRs are integrated.

Signoff: **ship this React Router compatibility milestone for coordinated merge**, subject to the final current-head hosted checks. No source-level migration blocker was found. Merge and any automatic destination deployment receipt are recorded by the coordinating task, not inferred from this local checkpoint.
