# NomadTime privacy publication — C4 observation

## Scope and provenance

- Product: `product:alia-wilkinson-website`; existing static privacy page and Vercel production deployment.
- Milestone / checkpoint: observe publication of PR #80 / C4. [C2/C3 preparation](2026-10-19-nomadtime-climate-privacy-C2-C3.md) remains historical evidence.
- Deployed source: `bd977223e8954d6673fddf274ed2635ecf37872e`, main; [PR #80](https://github.com/aliawilkinson/react-portfolio/pull/80) merged by `aliawilkinson` at October 19, 2026, 9:14:59 PM PDT. The agent found it already merged and performed no bypass or additional deployment.
- Author / accountable owner / reviewer: Codex observation; Alia Wilkinson release owner; subsequent evidence review pending.
- Verified at: October 19, 2026, 9:43:11 PM PDT (`2026-10-20T04:43:11Z`). Observation window: one bounded readback, not an uptime measurement.
- Next checkpoint owner / due: release owner, review this evidence at the next support-policy change or release handoff; calendar date unassigned.

## Deliverables and checks

Existing [context](../../context.md), [architecture](../architecture.md), [operations](../operations.md) and [recovery](../recovery.md) apply. No new service, topology, configuration or data flow was introduced; diagrams and recovery procedures remain unchanged.

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Reviewed candidate merged | GitHub PR readback; head `88bb8c059f0d13b516d80e65cb603a3365a76dfe`; tests and preview checks passed | verified | PR #80 and merge source above | October 19 / Codex |
| Correct source reached production | Existing authenticated Vercel CLI listed `react-portfolio`, scope `aliawilkinsons-projects`; READY production deployment on main matches the merge SHA | verified | `https://react-portfolio-27kwgwq92-aliawilkinsons-projects.vercel.app` | October 19 / Codex |
| Live privacy response equals the tested static artifact | Public HTTPS GET followed the apex 308 redirect to www; final HTTP 200; SHA-256 exactly matches the tested source; NASA disclosure and October 19 date present; zero scripts and no plaintext support email | verified | `https://www.aliawilkinson.com/nomadtime/privacy`; SHA-256 `fe8f915d27ce676e9a613b37555c65f82072cf5ba4f14d7f878254a47496d5f1` | October 19, 9:43:11 PM PDT / Codex |

## Release and catalog evidence, when applicable

- Intended and actual target: existing Vercel project `react-portfolio`, ID `prj_5lrG8wBbkPx8EsX5XVrH2zZspuhM`, production. Existing Git integration published the merge; no duplicate build or manual promotion was invoked.
- Unchanged configuration digest: `vercel.json` SHA-256 `9e13c4eb746d6005894dc5614bce09661158643f4510b3d21db535e0b29550e7`.
- No deployment failure or drift observed in this scoped readback. No rollback, recovery drill, runtime error-log scan, monitoring/drain audit or extended observation was performed; none is implied by HTTP 200.
- MetadataDB ingestion acknowledgement: unknown; no catalog write was made by this observation. The existing Product/Component inventory and configuration did not change. Keep this source/deployment evidence available for the normal receipt review.
- Apple public submission: outside this portfolio milestone; the policy publication does not establish a resubmission, approval or physical-device test.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Receiving maintainer/catalog receipt review not observed | Maintenance/handoff remains separate from this C4 text check | Release owner | Next release handoff; calendar date unassigned | Reviewed evidence/catalog acknowledgement if applicable |

## Signoff

- Decision: **ship** this scoped C4 privacy-publication observation; source and public response match. This closes the production-text gap from the C2/C3 report only.
- Decision owner/date and evidence: Codex technical verification, October 19, 2026; exact GitHub, deployment and response evidence above. Human evidence review remains separate.
- No claim of App Store approval, whole-site operational readiness or completion of the portfolio's unrelated owned gaps.
