# Product architecture and operations record

ID: `product-operating-record`. Version: `1.0.0`. Owner: Product Factory. Scope: new Product repositories and explicitly adopted existing Products.

Start the record during onboarding, complete the design before implementing it, and update it at every milestone. Prepare operating and recovery procedures before release. After release, add dated evidence of what actually deployed and what passed verification. A release is not the first documentation checkpoint.

This standard extends the durable Product context contract. Keep purpose and history in `product.config.json` → `product.context` and its generated `docs/context.md`. Link to that context instead of maintaining another authoritative business narrative. The Product owns its operating record; Components and environments identify the scope of technical claims.

## Seeded files and responsibility

Every generator seeds the same editable pack under `docs/operating-record/`:

- `checklist.md`: checkpoint checklist, coverage, owners and open gaps.
- `architecture.md`: business-to-technical explanation, Component inventory and diagram requirements.
- `operations.md`: delivery, data, monitoring, maintenance, cost and retirement guidance.
- `recovery.md`: failure scenarios, recovery targets, complete rebuild and restore evidence.
- `reports/TEMPLATE.md`: copy for each milestone or release; retain historical reports.

The standard is copied to `docs/product-operating-record-standard.md`. New repository agent contracts and READMEs link to the checklist. The generator seeds instructions and declared manifest facts; it does not complete checkboxes, invent diagrams of live infrastructure, run recovery tests or assert conformance. After creation these files are Product-owned: edit them in the same PR as the relevant implementation; never rerun a generator over them to refresh prose.

## Checkpoints

| Checkpoint | Trigger and lead | Required result before signoff |
| --- | --- | --- |
| C0 — Intake | Product creation; Product owner | Purpose, users, business problem, value, critical journeys, accountable/support owners, scope and non-goals. Record criticality, outage impact and unknowns; link canonical Product/Component identities. |
| C1 — Design | Before implementing a new architecture; Architect | Explain how Components solve the business problem. Record system context, code/module structure, deployment topology per intended environment, data flows/trust boundaries, dependencies, failure behavior, decisions and proposed reliability/recovery targets. |
| C2 — Implementation | Each implementation milestone; implementing owners and QA | Update diagrams and inventory from source; document setup, tests, configuration/secret locators, data lifecycle, release/rollback and operating/recovery steps. Record implemented versus planned capability and meaningful verification evidence. |
| C3 — Pre-release | Before a release or production promotion; QA, DevOps and Signoff | Review the exact source/artifact and target environment. Check critical journeys, account isolation where applicable, monitoring/alert routing, access, migrations, rollback and applicable recovery rehearsal. Record unresolved risks and ship/revise/hold. |
| C4 — Post-release | After each deployment and agreed observation window; release owner | Save immutable release/observation evidence: actual versions, Components, environment, resources, smoke results, alerts and observed drift. Link the MetadataDB receipt/review acknowledgement. Record what remains unverified and its owner/due date. |
| C5 — Maintenance/handoff | Architecture, ownership, dependency or data changes; incident, recovery drill, review due date, handoff, retirement or revival | Refresh affected diagrams/runbooks, obligations and recovery evidence. A receiving maintainer must locate access/source and reproduce relevant setup/verification. Retain decisions and previous evidence. |

These are workflow instructions for the agent/team doing the work, not a background scheduler or an automatic CI gate. At the start of a milestone, select its checkpoints and owners. Before ending it, update the pack and copy `reports/TEMPLATE.md` to a unique report such as `reports/<date>-<milestone>-<checkpoint>.md`. A Project that changes an existing Product links to that Product's record rather than creating a competing copy.

## Evidence and signoff

Record scope (Product, Components, environment), source revision, author/reviewer, actual verification date, method and evidence locator for each technical assertion. Use `unknown`, `planned`, `documented`, `verified`, `failed` or `not-applicable` with a reason. Documented means a procedure exists; verified requires a successful scoped check. A generated starter, a green build, a provider's availability commitment and an app's measured uptime are different evidence.

Mark a checkbox complete only when its deliverable exists and its current evidence is linked. Explicitly inapplicable items need a reason. Deferred work needs an owner, due date and affected gate. Do not close a checkpoint with unmet applicable exit criteria. Signoff uses `ship`, `revise` or `hold` for the named milestone only; shipping a local shell does not authorize deployment. Missing critical access, data protection or recovery prerequisites hold the affected release. A deployed release can still have post-release verification or handoff on hold.

Every Product answers the same questions; depth follows business criticality and data risk. A local prototype may have no availability commitment and no server data to restore. Record that reason. High availability is a deliberate design choice; do not add multi-region services or any other infrastructure simply to complete the checklist. Keep HA design, measured availability, backup configuration and tested disaster recovery separate.

## Diagrams and source authority

Keep diagram source in the repository (Mermaid in Markdown is sufficient). Each view states whether it is intended, implemented from source, or observed, plus its revision/date. Use stable Component IDs where relevant. Code modules can appear in a code diagram without becoming separate deployable Components. Distinguish runtime connections, deployment dependencies and shared deployment groups. Do not infer connections from folder proximity.

Generate diagrams from authoritative relationships where practical, then review labels and semantics. Code/IaC can establish intended structure; only provider/release evidence can establish deployment. Keep credentials, customer data and sensitive recovery material outside diagrams and reports.

## Storage and MetadataDB

Commit the checklist, diagram source, runbooks and checkpoint reports with the Product. Keep large logs or restricted evidence in the appropriate protected store and link an immutable artifact/digest. Preserve report history; link a superseding report when correcting it. Record metadata/access locators, never secret values, raw IaC state or customer records.

Keep queryable Product/Component identities, relationships, configuration references, release receipts, observations and evidence in MetadataDB using its current schemas and reviewed ingestion paths. Reference repository documents by path and revision. Refresh context projections using `product-context.mjs` and propose canonical changes through review; never overwrite divergent canonical records. A publication attempt is not confirmed ingestion. Unknown ingestion status remains explicit.

This milestone adds no MetadataDB schema, collector, scheduled job or provider action. Proposed recovery metrics and review dates remain in the Product record pack until a reviewed canonical schema supports those fields. Do not claim they are portfolio-queryable merely because prose was generated. Recovery guidance must remain accessible even when MetadataDB is unavailable.
