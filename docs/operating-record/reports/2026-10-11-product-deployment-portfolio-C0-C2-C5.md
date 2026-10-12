# Product deployment portfolio reconciliation

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Milestone / checkpoints: deployed-product portfolio reconciliation, C0 / C2 / C5
- Components: Projects catalog, NomadTime case study, AtlasTask case study, SupplementFriend case study and SEO copy
- Portfolio source: branch `codex/refresh-product-portfolio`, based on `origin/main` at `e208237c893c8d45ee3f7226180cf2284a3fc527` before this change
- Product evidence reviewed: NomadTime `55652f30d8b2d52e4a478c3b5d92136eb32e55a9`; AtlasTask `f1f964f9bae8327b8b32774f1dcb8b0c817fabd9`; SupplementFriend `db878bc31c2acf7374e9350be9573f9292087392`
- Author / owner: Codex implementation; Alia Wilkinson owns product and copy review
- Recorded: 2026-10-11 America/Los_Angeles; public URL reachability observed 2026-10-12 UTC
- Next checkpoint: owner review of the pull request, then C3 before portfolio release and C4 after an observed production deployment

This report reconciles portfolio claims to saved delivery evidence and a narrow current reachability check. It does not expose private repositories, credentials, user data, provider identifiers or operational procedures.

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence | Verified at / by |
| --- | --- | --- | --- | --- |
| NomadTime is a public project | Reviewed the 1.2.3 web and iOS delivery receipt; issued a current HTTPS HEAD request to the public origin | verified | `/Users/alia/Projects/nomadclock/reports/deployments/delivery-nomadclock-aceddd8a6528a790.json`; HTTP 200 from `https://nomadtime.org` | 2026-10-12 UTC / Codex |
| NomadTime 1.2.3 is available to internal TestFlight testers | Reviewed exact-source signed-artifact and Apple readback in the delivery receipt | verified historical receipt | Same delivery receipt, build 54, Apple `IN_BETA_TESTING` at its recorded observation time | 2026-10-12 UTC receipt / release process |
| NomadTime is publicly available through the App Store | Later provider approval was not established | unknown | Receipt records the separate 1.0.0 submission as awaiting review | Not verified |
| SupplementFriend is a public project | Reviewed production deployment reports; issued a current HTTPS HEAD request to the public origin | verified | `/Users/alia/Projects/supplementai/docs/operating-record/reports/2026-10-09-stack-first-release.md`; HTTP 200 from `https://supplementfriend.com` | 2026-10-12 UTC / Codex |
| SupplementFriend 0.3.0 (3) is internally available in TestFlight | Reviewed signed build, upload and Apple distribution evidence | verified historical receipt | Same STACK01 report and linked release receipts | 2026-10-10 UTC receipt / release process |
| SupplementFriend live photo extraction is ready for accuracy claims | Provider credit exhaustion and absent held-out live accuracy evidence remain explicit | failed / held | Same STACK01 report | 2026-10-10 UTC receipt |
| AtlasTask is a distributed private alpha | Reviewed exact-source build, signed artifact and Apple group readback | verified historical receipt | `/Users/alia/Projects/todotaskapp/docs/operating-record/reports/2026-10-09-testflight-alpha102.md`, version 0.1.0 build 56 | 2026-10-10 UTC receipt / release process |
| AtlasTask has a public project destination | The recorded production domain remained an unactivated plan; no public origin was claimed | not-applicable | `/Users/alia/Projects/todotaskapp/docs/test-reports/production-domain-2026-10-06.md` | No public destination verified |
| Portfolio distinguishes projects from case studies | Publicly openable products are linked from Projects; private AtlasTask remains a case study | documented | `src/utils/data.js`, `src/utils/posts.js` | This change |
| Public Projects explain product and destination | Each public card identifies what the product does, its deployment surface, and the live destination opened in a new tab | documented | `src/utils/data.js`, `src/components/OtherProjects/OtherProjectsList.jsx` | This change |
| Copy acknowledges delivery failures and constraints | Case studies now describe product-specific failures, fixes and intentionally held claims | documented | `src/utils/posts.js` | This change |

## Release and catalog evidence

- Intended portfolio destination: a pull request against `main`; no portfolio production deployment is performed by this milestone.
- Current public product observation: NomadTime and SupplementFriend returned HTTPS 200 responses. This is reachability evidence, not a full runtime journey or provider health certification.
- Portfolio deployment receipt: not applicable until merge and Vercel deployment are separately observed.
- Drift and unknowns: product repositories contain work newer than some release receipts. Only named released revisions and explicitly observed public origins are described as shipped.
- MetadataDB: no new proposal, receipt or ingestion acknowledgment was created or inferred.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due | Resolution evidence |
| --- | --- | --- | --- | --- |
| Portfolio production has not been deployed or observed | C3 / C4 | Release owner | After PR approval | Vercel deployment and route smoke evidence |
| Public App Store status for NomadTime remains unverified beyond the saved review receipt | Copy must not claim App Store availability | Product owner | Before adding an App Store badge or link | Current Apple provider readback |
| SupplementFriend external beta review and live extraction accuracy remain held | Copy must retain the boundary between shipped deterministic flows and held AI claims | Product owner | Before public launch claim | Apple review plus funded held-out accuracy evidence |
| AtlasTask has no verified public destination | It remains a case study rather than a Projects portal | Product owner | If public access is intentionally launched | Public origin and journey verification |

## Signoff

- Decision: **ship for pull request review; hold production-release claims**.
- Rationale: the portfolio candidate now reflects the strongest claims supported by delivery receipts and current public reachability while keeping beta, public availability and AI-accuracy gates distinct.
- Remaining conditions: pass repository tests and production build, obtain owner review, merge through the normal PR workflow, then record C3 / C4 deployment evidence separately.
