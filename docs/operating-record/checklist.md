# Alia Wilkinson portfolio operating checklist

Product: `product:alia-wilkinson-website`. Inspected source: `f3da1a3ff3c77d4a91989acfa87b66f95510af45`. Recorded 2026-10-07 UTC (2026-10-06 US Pacific). Author: Codex source-inspection backfill; human review pending.

Authority: **source-defined/intended**, except explicitly linked **historical-receipt** or **verified** results. No live provider observation was made. Source revision applies to every unqualified view below; explicitly unmerged views use their own named revision. Record owner: Product owner; technical updates: Architect/DevOps. Next review date: **unassigned — Product owner must set before the next affected gate**.

Follow [Product Factory standard 1.0.0](../product-operating-record-standard.md). Each checked item below means that specific document deliverable exists, not that the entire checkpoint passed. Complete gates only with dated scoped evidence; unknowns remain open. Roles are proposed accountable roles, not a claim a human accepted them.

## C0 — Intake

- [x] Business problem, critical journeys and qualitative outage impact documented in [architecture](architecture.md).
- [ ] Confirm named business/technical/support and backup custodians, formal criticality and success measures.
- [x] Canonical identity/evidence locator recorded in architecture; unresolved proposals remain explicit.
- [ ] Set review owner acceptance and next review date; approve unresolved scope decisions.

## C1 — Design

- [x] Component/deployment-group inventory, system context, code, deployment and data-flow views exist in [architecture](architecture.md).
- [x] Dependencies, failure boundaries, source versus plans and known design limitations documented.
- [ ] Approve availability/RTO/RPO and retention/access/cost requirements proportional to criticality.
- [ ] Review diagram semantics and provider decisions with the responsible maintainer.

## C2 — Implementation

- [x] Source inventory reconciled to the named default revision, with candidate/historical evidence distinguished.
- [x] Setup, validation, release, maintenance and rollback procedures recorded in [operations](operations.md).
- [x] Rebuild order and missing recovery prerequisites recorded in [recovery](recovery.md).
- [ ] Complete current runtime/journey verification and resolve implementation gaps; a doc check is not a runtime test.
- [x] Save documentation milestone [report](reports/2026-10-07-operating-record-backfill.md) with scope and Signoff.

## C3 — Pre-release

- [ ] Pin exact source/artifact/environment/configuration and approved target/access.
- [ ] Pass required security, critical-journey, accessibility and applicable account-isolation checks.
- [ ] Verify monitoring/recipient, capacity/cost and recovery/rollback rehearsal against approved targets.
- [ ] Record QA/DevOps review, unresolved risk acceptance and explicit release Signoff. No release approved by this backfill.

## C4 — Post-release

- [x] Record whether historical receipts exist and keep them distinct from current source or health.
- [ ] Record actual newly released versions, resources, config/artifact digests and immutable receipt.
- [ ] Verify destination journeys/alerts after a declared observation window; reconcile topology drift.
- [ ] Link accepted MetadataDB receipt review and owner/due dates for remaining checks. No new deployment occurred here.

## C5 — Maintenance and handoff

- [x] Document dependency/renewal/access/data review, retirement and revival triggers in operations.
- [ ] Have a receiving maintainer reproduce setup and recover applicable data without the original developer.
- [ ] Review backup freshness and record a measured restore drill; verify obligations and support custody.
- [ ] Save a new report for change/incident/drill/handoff and agree the next review date.

## Owned gaps

Every due date below is **unassigned**; the named role must obtain an agreed date before the affected gate. No date or human approval is invented.

| ID | Open gap | Responsible role | Affected gate | Due |
| --- | --- | --- | --- | --- |
| RP-01 | Current Vercel binding/triggers, retained deploys, DNS/access recovery and rollback procedure unverified | DevOps | C3–C5 | Unassigned |
| RP-02 | Privileged discovery requires fail-closed auth, least-privilege token, request/cost controls and log redaction review | Backend / Security | C3 | Unassigned |
| RP-03 | Availability/RTO/RPO, recovery exercise, alert recipient and support backup unknown | Product / QA | C1, C3, C5 | Unassigned |
| RP-04 | Gemini/analytics retention, current spend/renewals and accountable support roles incomplete | Product | C0, C3, C5 | Unassigned |
| RP-05 | Current source differs from historical receipt; no fresh deployment observation | Release owner | C4 | Unassigned |

## Checkpoint history

| Date / milestone | Report | Signoff | Scope remaining |
| --- | --- | --- | --- |
| 2026-10-07 operating-record backfill | [Dated report](reports/2026-10-07-operating-record-backfill.md) | ship documentation for review; hold applicable release/handoff gates | Owned gaps above; C0–C5 not collectively complete |

At creation use C0; before architecture implementation use C1; every implementation milestone use C2; before release use C3; after deployment plus observation use C4; after changes, incidents, drills, handoff, retirement or revival use C5. Copy [report template](reports/TEMPLATE.md) for each occurrence and retain prior evidence.

Maintenance evidence: [Dependabot coverage milestone](reports/2026-10-07-dependabot-coverage.md) records actual manifest roots and preserved upgrade gates.

Dependency upgrade evidence: [React Router 7 compatibility checkpoint](reports/2026-10-07-react-router7-compatibility.md) records the inspected candidate, migration applicability, Node 24 tests, production prerender/SEO and browser route checks. Final combined dependency verification remains a separate checkpoint.
[Axios update C2/C5 report](reports/2026-10-07-axios-update-C2-C5.md) records PR #52 conflict resolution, dependency verification and remaining advisory scope.
