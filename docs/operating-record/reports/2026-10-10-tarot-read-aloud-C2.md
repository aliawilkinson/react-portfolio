# Tarot read-aloud C2 report

## Scope and provenance

- Product: `product:alia-wilkinson-website`
- Project / milestone / checkpoint (C0–C5): Tarot browser-native read-aloud controls / C2 implementation
- Components / deployment groups / environment: Tarot React experience and client browser speech synthesis; candidate source only
- Source revision / artifact versions and digests / configuration digest: Candidate branch `codex/tarot-read-aloud`; final revision recorded by the pull request
- Author / accountable owner / reviewer: Codex author; Alia Wilkinson is product owner and reviewer
- Recorded at / actual verification time / observation window: 2026-10-10 America/Los_Angeles; no production observation
- Review due / next checkpoint owner and date: Product-owner review in pull request; C3 release and C4 production observation remain separate

## Deliverables and checks

Current [context](../../context.md), [architecture](../architecture.md), [operations](../operations.md), and [recovery](../recovery.md) were reviewed for scope. This milestone adds an optional client-only accessibility control. It does not add a service, provider, secret, stored data, network request, or deployment component, so the existing topology and recovery procedures remain accurate.

| Requirement / claim | Scope and method | Status | Evidence path / immutable locator | Verified at / by |
| --- | --- | --- | --- | --- |
| Read AI and offline interpretations aloud | Structured speech-text generation covers AI sections, Celtic Cross, three-card, and single-card readings | verified | `src/components/Tarot/utils/getReadingSpeechText.js`, `tests/unit/getReadingSpeechText.test.js` | 2026-10-10 / Codex tests |
| Playback remains user-controlled | Browser speech begins from a button and exposes pause, resume, and stop | verified | `src/components/Tarot/ConversationTurn.jsx`, `src/components/Tarot/hooks/useReadAloud.js`, `tests/unit/useReadAloud.test.js` | 2026-10-10 / Codex tests |
| Narration does not overlap a new reading or survive navigation | Active speech is canceled by another reader, new-question submission, reset, text replacement, and component cleanup | verified | Hook and Tarot source plus unit tests | 2026-10-10 / Codex tests |
| No additional reading data leaves the browser | Implementation uses the browser-provided `speechSynthesis` interface and adds no fetch, provider, key, or persistence | verified | Scoped source inspection | 2026-10-10 / Codex |
| Existing application behavior remains unchanged | Vitest suite: 15 files and 132 tests passed; Vite production build and 18-route prerender completed; SEO and sitemap validation passed for all 18 routes | verified | Local command evidence: `npm test -- --run`, `npm run build`, `npm run validate` | 2026-10-10 / Codex |
| Rendered controls expose usable states | Local in-app browser reading verified Read aloud, Pause, Resume, Stop, idle return, accessible labels, and live status text | verified | Local UI observation against `http://127.0.0.1:5173/tarot` | 2026-10-10 / Codex |
| Operating diagrams, inventory, and recovery procedures remain accurate | No new runtime Component, storage, provider, or data flow | not-applicable | `docs/operating-record/` | 2026-10-10 / Codex source review |

## Release and catalog evidence, when applicable

- Intended target versus actual deployed destination/version: No deployment authorized or attempted by this C2 milestone.
- Deployment receipt and destination smoke-check evidence: not-applicable; no deployment occurred.
- Drift, failed checks, rollback/incident reference: No source-check or local browser failures observed. The build retained the existing bundle-size warning. No provider state was inspected.
- MetadataDB proposal/receipt PR and ingestion acknowledgement: not-applicable; no Product or Component inventory change.
- Submission/merge/verification status and date: Candidate branch only at report creation; pull request and checks provide final source evidence.

## Gaps and follow-up

| Gap / risk | Impact and affected gate | Owner | Due date | Resolution evidence |
| --- | --- | --- | --- | --- |
| Available voice and pronunciation vary by browser and operating system | User experience differs across devices; does not block core tarot use | Product owner | Pull request review | Browser review notes |
| Physical iPhone playback has not been observed in this milestone | Mobile production behavior remains unverified for C3/C4 | QA / Product owner | Before claiming iPhone verification | Physical-device evidence |
| Production deployment and observation are outside this milestone | C3 and C4 remain open if released | Release owner | Unassigned | Future release and observation evidence |

## Signoff

- Decision: **ship** the C2 source candidate for product-owner review; this does not authorize deployment.
- Decision owner/date and evidence: Codex / 2026-10-10 / this report.
- Rationale, explicit scope and remaining conditions: The client-only feature, regression suite, production build, and local browser interaction pass. Product-owner review and physical-iPhone observation remain separate. No deployment is authorized by this report.
