# Portfolio brand home link C2 report

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Project / milestone / checkpoint: global portfolio brand navigation, C2 implementation
- Components / deployment groups / environment: shared portfolio header and header styling; local candidate only
- Implementation revision: `43140468b8637f52d5e7dabefe03f3fc6289f612`
- Author / accountable owner / reviewer: Codex / Product owner / Product owner review pending
- Recorded at: 2026-10-14 America/Los_Angeles
- Review due / next checkpoint owner and date: Product owner, unassigned

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Global brand navigation | Replaced the decorative “Alia” label with a React Router link to `/` in the shared portfolio header | verified | `src/components/Header/Header.jsx`; revision `43140468b8637f52d5e7dabefe03f3fc6289f612` | 2026-10-14 / Codex |
| Same-page behavior | Added smooth scroll to the top when the brand is selected from within the homepage | verified | `src/components/Header/Header.jsx` | 2026-10-14 / Codex |
| Keyboard and screen-reader access | Added descriptive accessible naming and visible focus styling while preserving inherited header color | verified | `src/components/Header/Header.jsx`; `src/components/Header/Header.module.scss` | 2026-10-14 / Codex |
| Cross-route browser check | Opened `/projects`, observed “Alia Wilkinson, home” as a link to `/`, selected it, and observed navigation to the homepage | verified | Local browser observation at `http://127.0.0.1:5173/projects` | 2026-10-14 / Codex |
| Unit tests | Ran the complete Vitest suite | verified | 15 files and 134 tests passed | 2026-10-14 / Codex |
| Production build and SEO | Ran `npm run build:validate`; build, prerender, sitemap, and SEO checks passed for all 18 validated routes | verified | Local command output for revision `43140468b8637f52d5e7dabefe03f3fc6289f612` | 2026-10-14 / Codex |

## Release and catalog evidence

- Intended target: existing PR #73 from `codex/portfolio-copy-edit` to `main`.
- Actual deployed destination/version: unknown. No production deployment is claimed.
- Deployment receipt and destination smoke-check evidence: not applicable to this C2 candidate.
- Drift, failed checks, rollback/incident reference: none observed in the named checks. The existing bundle-size warning remains outside this navigation scope.
- MetadataDB proposal/receipt PR and ingestion acknowledgement: not applicable.
- Submission/merge/verification status and date: local candidate verified on 2026-10-14; push, PR checks, review, merge, and production observation remain pending.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Product-owner review remains pending | Candidate may require revision before merge | Product owner | Unassigned | PR review decision |
| Production deployment is not observed | C4 remains open | Release owner | Unassigned | Merge, Vercel receipt, and production route observation |

## Signoff

- Decision: **ship** the named navigation candidate to PR review; **hold** merge and production release for product-owner approval.
- Decision owner/date and evidence: Codex, 2026-10-14; revision `43140468b8637f52d5e7dabefe03f3fc6289f612`, passing tests, production validation, and local browser verification.
- Rationale: The shared brand is now an accessible home control from portfolio routes and retains predictable behavior on the homepage. This decision does not authorize or claim production deployment.
