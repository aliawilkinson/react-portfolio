# Explicit CI checkpoint — 2026-10-22

Milestone: owner-requested portfolio CI/free-tier audit. C1 execution policy, C2 source verification, C5 maintenance. Scope is workflow routing and operating guidance, not application behavior or deployment. Reviewed base: `bd977223e8954d6673fddf274ed2635ecf37872e`. Candidate identity is the commit containing this report and its PR; source adoption remains pending until that PR is merged. Owner direction is recorded in Product Factory issue [#120](https://github.com/aliawilkinson/product-factory/issues/120).

## Changes

Hosted source verification runs only on deliberate manual dispatch, bound to the exact requested source. Pushes, PR updates and merges no longer start the changed source workflows. Local checks before merge and complete release verification remain mandatory for their applicable scope. Required checks, independent approvals and protected environments are unchanged. An unavailable required context holds the merge; local output is not a fabricated hosted result.

Changed workflows: `.github/workflows/deploy.yml`.

Verification remains npm ci plus npm test when requested. This public repository uses standard public-runner discounts; avoiding automatic runs still reduces wasted work. No hosting or deployment setting changed.

## Verification

- Actual manual SHA guard executed with matching source, malformed SHA, moved workflow and checkout drift: 4 cases passed.
- All changed workflow files pass actionlint 1.7.12 (`-shellcheck=`); no shellcheck result is claimed. The combined portfolio harness parsed 15 changed workflows as manual-only and exercised 40 actual-shell SHA identity cases, all passing.
- `git diff --check`: passed. No manifests, lockfiles, application code or provider resources changed.
- Hosted execution: not requested. Account allowance was exhausted; no retry/build was launched to measure cost. Full application release testing is not claimed by this workflow-only checkpoint.

## Evidence and signoff

**ship** for this tested source-routing change through normal PR review/merge gates; **hold** for any release lacking its complete existing gate. No manual deployment, package publication, store upload, billing adjustment or historical artifact deletion occurred. A merged source policy, a running executor and observed savings are separate claims. MetadataDB canonical evidence synchronization is pending; this report is source-owned evidence, not a Deployment or canonical Observation.

Next action: confirm PR inclusion, then inspect the next existing maintenance/billing review for unexpected source triggers and operational consumption. Preserve older reports; October 22 supersedes earlier automatic-main/opt-in routing descriptions. Operator: Codex acting on Alia's request; no separate human review or approval is inferred.

## Review follow-through

Settings inspection found one required independent approval and no required status checks; no rulesets exist. The review concern assuming a required Test context does not apply to the current settings. Manual workflow jobs cannot satisfy required PR ruleset contexts if one is added later; that would need a separately reviewed integration. Existing Vercel Git integration automatically created a successful preview; no manual deployment or hosting setting change was performed. Source adoption awaits independent approval.
