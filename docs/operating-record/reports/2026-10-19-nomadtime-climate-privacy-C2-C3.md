# NomadTime seasonal-weather privacy publication — C2/C3

## Scope and provenance

- Product: `product:alia-wilkinson-website`.
- Project / milestone / checkpoints: publish NomadTime's existing NASA climate disclosure; C2 implementation and C3 pre-release. C4 production observation remains open.
- Components / deployment group / environment: static portfolio privacy page at `/nomadtime/privacy`; existing `react-portfolio` Vercel project, preview verified and production intended. No service or inventory change.
- Source: policy candidate `676176e5eef1eb72675184d1c2d05f9e540a7787` in [PR #80](https://github.com/aliawilkinson/react-portfolio/pull/80), based on main `b2f669cc1dc90772f03340950f173dc7b7c056b9`. This review follow-up changes documentation only; the policy artifact is unchanged.
- Privacy HTML SHA-256: `fe8f915d27ce676e9a613b37555c65f82072cf5ba4f14d7f878254a47496d5f1`. Unchanged `vercel.json` SHA-256: `9e13c4eb746d6005894dc5614bce09661158643f4510b3d21db535e0b29550e7`.
- Author: Codex. Accountable release owner: Alia Wilkinson. Automated reviewer: `chatgpt-codex-connector`; independent approving review remains pending.
- Recorded and verified: October 19, 2026, America/Los_Angeles; local verification and protected-preview observation occurred that evening. This is a point-in-time check, not an uptime observation window.
- Next checkpoint owner / due: release owner, C4 immediately after an approved production publication; no calendar deadline has been agreed.

The public policy lacked a paragraph already reviewed in NomadTime source [`9e022b851cb22e32ac85f04fc5f650a573675dfe`, `docs/site/privacy.html`](https://github.com/aliawilkinson/nomadclock/blob/9e022b851cb22e32ac85f04fc5f650a573675dfe/docs/site/privacy.html). Copy that paragraph and set the policy date to October 19. The paragraph describes rounded public city coordinates, normal NASA request/IP information, bundled profiles and local caching. It does not send raw GPS, notes, photos or schedules through the climate client. Existing MET Norway, MapKit, local-data/deletion and support disclosures remain.

## Deliverables and checks

The [context](../../context.md), [architecture](../architecture.md), [operations](../operations.md) and [recovery](../recovery.md) remain applicable. No topology, data flow, deployable Component, dependency, route, secret or recovery procedure changes; diagram/inventory/runbook edits and a new recovery rehearsal are not applicable to this static disclosure correction.

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Public copy matches the reviewed app policy | Compared the NASA paragraph to the pinned NomadTime source above | verified | `public/nomadtime/privacy/index.html` at candidate `676176e` | October 19 / Codex |
| Local regression, production build and clean routes | Node 24 frozen install; 134 tests in 15 files; production build and SEO validation for 18 routes passed | verified | Private local verification logs; exact candidate's [GitHub Test job](https://github.com/aliawilkinson/react-portfolio/actions/runs/39367559128/job/118447750180) also passed | October 19 / Codex and GitHub Actions |
| Protected preview serves the intended static artifact | Authenticated `vercel curl` of `/nomadtime/privacy`; NASA paragraph/date present, no scripts or plaintext support email; response hash equals the HTML digest above | verified | [Exact preview](https://react-portfolio-b1l1kaj69-aliawilkinsons-projects.vercel.app/nomadtime/privacy), source `676176e` | October 19 / Codex |
| Operating record is discoverable | Moved the standalone note into this template-based dated report and linked it from the checklist; checked local links and digests | verified | This report and [checklist](../checklist.md) | October 19 / Codex |
| Production policy is updated | Observe the deployed source and public response after the approved merge | planned | Future C4 receipt for `https://aliawilkinson.com/nomadtime/privacy` | Not yet verified |

## Release and catalog evidence, when applicable

- Intended target: existing Vercel project `react-portfolio`, ID `prj_5lrG8wBbkPx8EsX5XVrH2zZspuhM`, scope `aliawilkinsons-projects`; public policy URL above. Project identity and Git-linked preview were read back; this is not a claim that all historical access/recovery gaps are closed.
- Actual observed candidate: [Vercel preview deployment](https://vercel.com/aliawilkinsons-projects/react-portfolio/2LTuWNEMeCKLrbx5TieHXM7py6P1) for commit `676176e`. It is not production publication.
- PR #80 is open; GitHub requires one independent approving review. The owner's authorization to update the policy does not imply permission to bypass that rule. A one-time admin exception was requested separately and is unanswered at report time; no rule was changed or bypassed.
- No new production deployment or Apple submission occurred in this milestone. A production receipt, destination readback and observation window belong to C4 after publication. Rollback remains the existing approved source/deployment procedure in operations; no rollback or restore is claimed here.
- MetadataDB proposal/receipt: not-applicable to this source-only copy correction, which changes no Product/Component inventory or configuration. No catalog ingestion is claimed. Evaluate the actual deployment receipt at C4.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Required approving review or explicitly authorized exception is pending | C3 merge/publication held | Release owner | Before merge | GitHub review or owner exception and merge receipt |
| Production source/text not yet observed | C4 remains open; preview must not be described as live | Release owner | Immediately after approved publication | Actual deployment/source identity and public response digest |

## Signoff

- Decision: **ship** the static correction and completed C2 record for review; **hold** production publication at C3 until the review/exception gate is satisfied, and keep C4 open until actual deployment verification.
- Decision owner/date and evidence: Codex scoped technical recommendation, October 19, 2026; [PR #80](https://github.com/aliawilkinson/react-portfolio/pull/80), checks and review finding above. Alia owns the production decision; no human approval is invented by this report.
- This recommendation covers static copy and documentation only. It does not certify the iOS binary, public App Store approval, production availability, a physical-device smoke test or all portfolio recovery obligations.
