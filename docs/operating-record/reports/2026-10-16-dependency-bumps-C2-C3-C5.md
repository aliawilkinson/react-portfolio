# October dependency updates C2, C3 and C5 report

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Project / milestone / checkpoint: consolidated Dependabot PRs #74 through #78; C2 implementation, C3 pre-release verification and C5 maintenance
- Components / deployment groups / environment: portfolio and tarot React application, Vite production build and local browser preview
- Default source: `9f176b457b2d95e376d7b8e0f6bf0996ef3cfd9f` on `origin/main`
- Candidate implementation source: `d84bb42edadc9f379fef4b479d94eaee9b449563` on `codex/dependency-bumps-20261016`; the report commit adds evidence only
- Author / accountable owner / reviewer: Codex implementation; product owner accountable; independent GitHub review pending
- Recorded at / verification time: 2026-10-16 US Pacific; local verification completed in this milestone
- Review due / next checkpoint owner and date: product owner and release owner; date unassigned

## Deliverables and checks

This maintenance candidate combines the five open automated updates so the dependency set can be evaluated together. The manifest requests `@google/generative-ai` 0.24.1, Framer Motion 14.1.0, Testing Library React 16.3.3, Vite React plugin 6.1.2, Puppeteer 25.13.0-compatible and Vite 8.3.4. The lockfile resolves Puppeteer 25.14.0 under the existing caret range.

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Dependency graph installs | `npm install` completed and `npm ls --depth=0` reconciled direct versions | verified | `package.json`, `package-lock.json` | 2026-10-16 / Codex |
| Automated behavior | `npm run verify` ran the complete Vitest suite, audit and validated production build | verified | 15 test files and 134 tests passed; audit reported zero vulnerabilities; all 18 routes validated | 2026-10-16 / Codex |
| Browser compatibility | Loaded the home, Projects and Tarot routes in the local production candidate preview and inspected browser errors | verified | No runtime errors observed; the only warning was the expected missing local Microsoft Clarity project ID | 2026-10-16 / Codex |
| Developer inventory | Reconciled the README Tech Stack versions after code review identified stale Framer Motion and Vite entries | verified | `README.md` | 2026-10-16 / Codex review and Codex |
| Gemini production request | No production API key or live model request was used during local dependency verification | unknown | Runtime service tests passed, but provider behavior was not observed | Not verified |
| Build size | Compared production output from the dependency candidate | verified | Main JavaScript output is about 629.09 kB, 198.63 kB gzip, and retains the existing large-chunk warning | 2026-10-16 / Codex |
| Supported runtime | Project declares Node 24.x; verification ran on local Node 26.10.0 and emitted an engine warning | failed | Re-run the final CI gate on the declared Node 24 runtime | 2026-10-16 / Codex |

The Google Generative AI package now emits a deprecation notice in favor of `@google/genai`. This update keeps the existing API surface working and treats the SDK migration as a separate implementation milestone rather than combining it with routine version updates.

## Release and catalog evidence

- Intended target: merge the combined dependency candidate after CI and independent review satisfy repository policy.
- Actual deployed destination/version: no production deployment is claimed by this report.
- Deployment receipt and destination smoke-check evidence: not applicable before merge and deployment.
- Drift, failed checks, rollback/incident reference: production drift is unknown; rollback is the merged change revert procedure in the operating record.
- MetadataDB proposal/receipt PR and ingestion acknowledgement: not applicable to this dependency-only milestone.
- Submission/merge/verification status and date: candidate submission pending at report creation; the individual automated PRs are intended to close as superseded only after the combined PR exists.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Node 24 CI result pending | The local Node 26 run does not satisfy the declared runtime gate | Release owner | Before merge | GitHub CI result on the combined PR |
| Independent review pending | Branch protection may prevent merge | Product owner / reviewer | Before merge | GitHub review and merge record |
| Live Gemini behavior unverified | SDK provider compatibility remains unobserved | Product owner / QA | Before relying on the update for an incident fix | Authenticated, redacted smoke-test evidence |
| Framer Motion increases the main bundle by about 127 kB raw and 36.5 kB gzip | Load performance may change and the existing chunk-size warning remains | Frontend maintainer | Unassigned | Performance measurement or deliberate acceptance |
| Google SDK is deprecated | Future fixes require a separate migration to `@google/genai` | Frontend / backend maintainer | Unassigned | Scoped migration PR and runtime verification |

## Signoff

- Decision: **ship** the combined candidate to pull-request review; **hold** production release until Node 24 CI and repository review requirements pass.
- Decision owner/date and evidence: Codex, 2026-10-16; local install, complete verification command and browser route checks recorded above.
- Rationale: the five updates pass the full local suite together, with the runtime-version distinction, bundle growth, provider boundary and deprecated SDK explicitly retained for review.

This decision closes only the local C2/C3/C5 maintenance candidate. It does not prove merge, deployment, provider behavior or post-release health.
