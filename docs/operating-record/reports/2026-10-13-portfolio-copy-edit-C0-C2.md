# Portfolio copy edit C0–C2 report

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Project / milestone / checkpoint: portfolio positioning and hierarchy copy edit, C0–C2
- Components / deployment groups / environment: homepage hero, expertise, case-study introduction, Projects introduction and summaries, About copy, footer, and SEO metadata; local candidate only
- Implementation revision: `b8f3381fb1ebe157f2e131419dab096c847f104f`
- Source basis: portfolio content and user-provided role clarification present on `origin/main` revision `68d0143`
- Author / accountable owner / reviewer: Codex / Product owner / Product owner review pending
- Recorded at: 2026-10-13 America/Los_Angeles
- Review due / next checkpoint owner and date: Product owner, unassigned

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Role positioning | Reframed the hero and overview around architecture collaboration, POCs, ARB participation, implementation, adoption, and release | documented | `src/components/Hero/Hero.jsx`; `src/utils/data.js`; revision `b8f3381fb1ebe157f2e131419dab096c847f104f` | 2026-10-13 / Codex |
| Project and case-study distinction | Clarified Projects as usable public work and case studies as architecture, POC, and delivery stories | documented | `src/components/OtherProjects/OtherProjectsList.jsx`; `src/components/CaseStudies/CaseStudies.jsx` | 2026-10-13 / Codex |
| Product comprehension | Rewrote five app summaries to state the visitor task and product value earlier | documented | `src/utils/data.js` | 2026-10-13 / Codex |
| About and search presentation | Aligned About copy and SEO descriptions with the revised role language | documented | `src/utils/posts.js`; `src/utils/seoData.js` | 2026-10-13 / Codex |
| Unit tests | Ran the complete Vitest suite | verified | 15 files and 134 tests passed | 2026-10-13 / Codex |
| Production build and SEO | Ran `npm run build:validate`; build, prerender, sitemap, and SEO checks passed for all 18 validated routes | verified | Local command output for revision `b8f3381fb1ebe157f2e131419dab096c847f104f` | 2026-10-13 / Codex |
| Browser review | Reviewed the rendered homepage hierarchy, hero wrapping, overview, case-study introduction, and footer in the local in-app browser | verified | Local observation at `http://127.0.0.1:4188/` | 2026-10-13 / Codex |

## Release and catalog evidence

- Intended target: review-only pull request from `codex/portfolio-copy-edit` to `main`.
- Actual deployed destination/version: unknown. No production deployment is claimed.
- Deployment receipt and destination smoke-check evidence: not applicable to this C0–C2 candidate.
- Drift, failed checks, rollback/incident reference: none observed in the named local checks. The existing bundle-size warning remains outside this copy-only scope.
- MetadataDB proposal/receipt PR and ingestion acknowledgement: not applicable.
- Submission/merge/verification status and date: local candidate verified on 2026-10-13; PR, human copy approval, merge, and C4 observation pending.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Product owner has not approved the revised voice | Copy may need adjustment before merge | Product owner | Unassigned | PR review decision |
| Mobile device review remains pending | Physical-device line wrapping is not observed by this desktop browser check | Product owner / QA | Unassigned | Mobile screenshots or device observation |
| Production deployment is not observed | C4 remains open | Release owner | Unassigned | Merge, Vercel receipt, and production observation |

## Signoff

- Decision: **ship** the named copy candidate to PR review; **hold** merge and production release for product-owner approval.
- Decision owner/date and evidence: Codex, 2026-10-13; revision `b8f3381fb1ebe157f2e131419dab096c847f104f`, passing tests, production validation, and local browser review.
- Rationale: The copy is shorter, states the work more directly, preserves architecture leadership boundaries, and makes public projects easier to understand. Product-owner voice review remains the controlling decision for merge.
