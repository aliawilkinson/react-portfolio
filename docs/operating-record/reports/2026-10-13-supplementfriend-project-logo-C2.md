# SupplementFriend Projects tile logo

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Milestone / checkpoint: SupplementFriend Projects tile logo / C2
- Components: Projects catalog data and the public SupplementFriend brand asset
- Source baseline: portfolio `main` merge commit `8e0ca3e6d7fbae9ab40f8f2008ca6f0035070c0b`
- Verified candidate revision: `624c259c23be64b3915fe314669ba735e06ee57c`
- Asset source: protected SupplementFriend repository revision `02ff7d69f6756ae636e01c5cc7f690f4fb166764`, `assets/brand/source/app-icon-v1.png`
- Delivered asset: 640 by 640 JPEG, 68 KB, SHA-256 `0087332abfbffdd475d1e0bb965b81b623258e593f19bad1c4e9d2699aac3927`
- Author / owner / reviewer: Codex implementation; Alia Wilkinson requested the brand correction
- Recorded: 2026-10-13 America/Los_Angeles
- Next checkpoint: C3 before merge and C4 after the resulting production deployment is observed

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence | Verified at / by |
| --- | --- | --- | --- | --- |
| Projects uses the SupplementFriend logo instead of a product screenshot | Updated only the public Projects entry; case-study screenshots remain unchanged | verified | `src/utils/data.js`, `public/supplementfriend/logo.jpg` at candidate revision `624c259c23be64b3915fe314669ba735e06ee57c` | 2026-10-13 / Codex source review |
| Logo is framed as a square portal tile | Uses contain fit on the logo's existing square brand background | verified | Local browser check at `/projects` | 2026-10-13 / Codex |
| Logo is sized for the Projects grid | Resized the 1254px source to a 640px, 68 KB JPEG for a 288px CSS tile and high-density displays | verified | `public/supplementfriend/logo.jpg` at candidate revision `624c259c23be64b3915fe314669ba735e06ee57c` | 2026-10-13 / Codex |
| Existing behavior remains intact | Repository tests and production validation | verified | `npm test -- --run`: 15 files and 134 tests passed; `npm run build:validate`: all 18 routes and sitemap passed | 2026-10-13 / Codex |

## Release and catalog evidence

- Intended target: a focused pull request to `main`.
- Production deployment: unknown until merged and observed.
- Rollback: restore the previous `imgSrc`, fit, and background values.
- MetadataDB ingestion: not-applicable; product inventory and deployment topology do not change.

## Gaps and follow-up

| Gap / risk | Impact | Owner | Due | Resolution evidence |
| --- | --- | --- | --- | --- |
| Production tile remains unobserved | C4 remains open | Release owner | After merge | Deployment receipt and public Projects check |

## Signoff

- Decision: **ship** the focused source candidate for pull request review.
- Decision owner/date and evidence: Codex / 2026-10-13 / this report.
- Remaining condition: merge through the normal pull request workflow and record C4 production evidence separately.
