# Product deployment portfolio reconciliation

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Milestone / checkpoints: deployed-product portfolio reconciliation, C0 / C2 / C5
- Components: Projects catalog, NomadTime case study, AtlasTask case study, SupplementFriend case study and SEO copy
- Portfolio source: branch `codex/refresh-product-portfolio`, based on `origin/main` at `e208237c893c8d45ee3f7226180cf2284a3fc527` before this change
- Protected product evidence reviewed: NomadTime repository revision `55652f30d8b2d52e4a478c3b5d92136eb32e55a9`; AtlasTask repository revision `f1f964f9bae8327b8b32774f1dcb8b0c817fabd9`; SupplementFriend repository revision `db878bc31c2acf7374e9350be9573f9292087392`. Access remains restricted to the product owner.
- Author / owner: Codex implementation; Alia Wilkinson owns product and copy review
- Recorded: 2026-10-11 America/Los_Angeles; public URL reachability observed 2026-10-12 UTC
- Next checkpoint: owner review of the pull request, then C3 before portfolio release and C4 after an observed production deployment

This report reconciles portfolio claims to saved delivery evidence and a narrow current reachability check. It does not expose private repositories, credentials, user data, provider identifiers or operational procedures.

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence | Verified at / by |
| --- | --- | --- | --- | --- |
| NomadTime is a public project | Reviewed the protected 1.2.3 web and iOS delivery receipt at NomadTime revision `55652f30d8b2d52e4a478c3b5d92136eb32e55a9`; issued an HTTPS HEAD request to the public origin | verified | Protected receipt `reports/deployments/delivery-nomadclock-aceddd8a6528a790.json` at the named revision; HTTP 200 from `https://nomadtime.org` | 2026-10-12 UTC / Codex |
| NomadTime 1.2.3 is available to internal TestFlight testers | Reviewed exact-source signed-artifact and Apple readback in the protected historical receipt | verified | Same protected receipt, build 54, Apple `IN_BETA_TESTING` at its recorded observation time | 2026-10-12 UTC historical receipt / release process |
| NomadTime is publicly available through the App Store | Later provider approval was not established | unknown | Receipt records the separate 1.0.0 submission as awaiting review | Not verified |
| SupplementFriend is a public project | Reviewed protected production deployment reports at SupplementFriend revision `db878bc31c2acf7374e9350be9573f9292087392`; issued an HTTPS HEAD request to the public origin | verified | Protected report `docs/operating-record/reports/2026-10-09-stack-first-release.md` at the named revision; HTTP 200 from `https://supplementfriend.com` | 2026-10-12 UTC / Codex |
| SupplementFriend 0.3.0 (3) is internally available in TestFlight | Reviewed signed build, upload and Apple distribution evidence in the protected historical receipt | verified | Same protected STACK01 report and linked release receipts | 2026-10-10 UTC historical receipt / release process |
| SupplementFriend live photo extraction is ready for accuracy claims | Provider credit exhaustion and absent held-out live accuracy evidence remain explicit; release remains held | failed | Same protected STACK01 report | 2026-10-10 UTC historical receipt |
| AtlasTask is a distributed private alpha | Reviewed exact-source build, signed artifact and Apple group readback in a protected historical receipt | verified | Protected report `docs/operating-record/reports/2026-10-09-testflight-alpha102.md` at AtlasTask revision `f1f964f9bae8327b8b32774f1dcb8b0c817fabd9`, version 0.1.0 build 56 | 2026-10-10 UTC historical receipt / release process |
| AtlasTask has a public project destination | The protected production-domain report records an unactivated plan; no public origin is claimed | not-applicable | Protected report `docs/test-reports/production-domain-2026-10-06.md` at the named AtlasTask revision | No public destination verified |
| Portfolio distinguishes projects from case studies | Publicly openable products are linked from Projects; private AtlasTask remains a case study | documented | `src/utils/data.js`, `src/utils/posts.js` | This change |
| Public Projects explain product and destination | Each public card identifies what the product does, its deployment surface, and the live destination opened in a new tab | documented | `src/utils/data.js`, `src/components/OtherProjects/OtherProjectsList.jsx` | This change |
| Copy explains delivered product work | Case studies describe the product, interaction model, implementation, and current availability in direct language | documented | `src/utils/posts.js` | This change |
| Product stories are visually grounded | AtlasTask uses inspected synthetic QA screens; SupplementFriend uses its public homepage and a generic beta profile screen | documented | `public/atlastask/`, `public/supplementfriend/`, `src/utils/posts.js` | This change |
| Portfolio voice matches owner direction | Product copy is concise, affirmative, free of em dashes, and leads with what each app does | documented | `src/utils/posts.js`, `src/utils/data.js`, `src/utils/seoData.js` | This change |
| Projects responds to the portfolio theme | Light mode uses a daylit green portal palette; dark mode retains the deep green portal palette with readable copy and controls in both | verified | `src/components/OtherProjects/OtherProjects.module.scss`; local browser check at `/projects` | 2026-10-13 America/Los_Angeles / Codex |
| Consolidated repository tests | Vitest suite after integrating PRs #65, #66, and #67 into PR #68 | verified | `npm test -- --run`; result recorded in `2026-10-13-open-pr-reconciliation-C2-C3.md` | 2026-10-13 / Codex |
| Consolidated production validation | Vite build, prerender, sitemap, and SEO validation after integration | verified | `npm run build:validate`; result recorded in `2026-10-13-open-pr-reconciliation-C2-C3.md` | 2026-10-13 / Codex |

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

- Decision: **ship** the verified portfolio source candidate through consolidated PR #68; hold production-release claims until C4 observation.
- Rationale: the portfolio candidate now reflects the strongest claims supported by delivery receipts and current public reachability while keeping beta, public availability and AI-accuracy gates distinct.
- Remaining conditions: merge through the normal PR workflow, then record C4 deployment evidence separately.
