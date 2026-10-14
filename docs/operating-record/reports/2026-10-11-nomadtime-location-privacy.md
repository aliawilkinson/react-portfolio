# NomadTime first-launch location privacy

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Project / milestone / checkpoint: NomadTime first-launch privacy copy / C2 and C3
- Components / environment: static privacy page at `/nomadtime/privacy`; portfolio source only
- Source revision: immutable candidate commit `41ebfde82e6e2210075a6fff5013859a37c1c355` from PR #67, consolidated into PR #68
- Author / owner / reviewer: Codex implementation; Alia Wilkinson owns the release decision
- Recorded: 2026-10-11 America/Los_Angeles; reconciled 2026-10-13 America/Los_Angeles
- Next checkpoint: C4 text observation after the merged portfolio deploy is identified

The copy explains the app's optional foreground location request, manual city selection, retained saved home, and absence of background location tracking. It changes no application behavior, dependency, or data flow.

## Deliverables and checks

| Requirement / claim | Scope and method | Status | Evidence | Verified at / by |
| --- | --- | --- | --- | --- |
| Privacy page matches first-launch behavior | Reviewed the static copy against the authorized description of the app flow | verified | `public/nomadtime/privacy/index.html` at candidate commit `41ebfde82e6e2210075a6fff5013859a37c1c355` | 2026-10-11 / Codex source review |
| Portfolio build and route validation | Run as part of the consolidated PR verification | verified | `npm test -- --run` and `npm run build:validate`; results recorded in `2026-10-13-open-pr-reconciliation-C2-C3.md` | 2026-10-13 / Codex |
| Production text is updated | Requires observation after merge and deploy | planned | Future C4 receipt and public URL check | Not verified |

## Release and catalog evidence

- Intended target: the portfolio's configured production deployment after merge to `main`.
- Actual Vercel project, deployment version, and production domain binding: unknown in this report. The earlier local note was not retained as provider evidence.
- Rollback: use the previous successful source revision and the hosting provider's retained deployment only after confirming both are available.
- MetadataDB ingestion: not-applicable; this static wording change does not alter product inventory.

## Gaps and follow-up

| Gap / risk | Impact | Owner | Due | Resolution evidence |
| --- | --- | --- | --- | --- |
| Production deployment and public text remain unobserved | C4 remains open | Release owner | After merge and deploy | Deployment receipt and `/nomadtime/privacy` text check |

## Signoff

- Decision: **ship** the static privacy correction through consolidated PR #68.
- Decision owner/date and evidence: Alia Wilkinson / 2026-10-13 / request to reconcile and merge open PRs.
- Remaining condition: record C4 deployment and public-page evidence separately.
