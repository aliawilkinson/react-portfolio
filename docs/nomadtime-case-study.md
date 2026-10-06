# NomadTime case study milestone

Date: 2026-10-05. Scope: add an evidence-based NomadTime case study to Alia's portfolio.

## Content and source

The article at `/nomadtime-case-study` covers the founder's motivation, the time-comparison MVP, overnight range semantics, connected clock/pin memories, the decision to prioritize native map gestures, and release verification. It presents Alia's role and AI-assisted implementation directly. The current TestFlight beta and future public/community work are clearly distinguished; no adoption, revenue, or performance metrics are invented.

Source basis: NomadTime's product brief, experience standard, map architecture documentation, current mobile package boundaries, and 1.0.0 candidate verification report. The three screenshots are authentic iOS candidate captures, resized for the website with on-image photo/map attribution retained. Publication status must be refreshed when the first public release becomes available.

## Integration

- Uses the existing Case Studies gallery, InfoPost renderer, routing, SEO metadata, prerender, and sitemap pipeline.
- Teal and gold editorial styling is scoped to this case study; other articles keep their current presentation.
- Links from the NomadTime project overview and back to the overview, support, and Case Studies.
- No new package or service. The concurrent MetadataDB and Product Factory case-study additions remain intact.

## Verification and signoff

Node 24 production build and SEO validation passed for 16 routes. All 122 existing tests passed. Browser review covered desktop 1440×1000, mobile 390×844, the article's screenshots, heading/canonical metadata, and navigation. Final hosted-preview checks accompany the PR. Source and preview readiness do not imply production publication.

Decision: ship the case-study content through the portfolio's required PR review and deployment checks. This change does not publish an iOS app release.

## Screenshot walkthrough follow-up

Added a six-screen feature tour to `/nomadtime` and illustrated, collapsible instructions to `/nomadtime/support`. The tour demonstrates landscape day/night comparison, named Work and Sleep ranges, renaming Tokyo to the fictional example “Maya in Tokyo,” and a Los Angeles map pin with a saved note. Images link to their larger versions. The screenshot tour requires no script, with local JPEGs, lazy loading, explicit image dimensions, descriptive alt text, and native keyboard-accessible disclosure controls.

New asset provenance:

| Website asset | Real iOS capture |
| --- | --- |
| `landscape.jpg` | 1.0.0 candidate, `testDStoreScreenshotsAndAbout`, `store-ranges-landscape` |
| `rename-place.jpg` | 1.0.0 candidate, screenshot-only QA run, `tour-rename-place` |
| `person-clock.jpg` | Same run, `tour-person-clock` |
| `map-pin.jpg` | Same run, `tour-map-pin` |
| `place-memories.jpg` | Same run, `tour-place-memories` |

The new QA run used the isolated NomadTime iPhone simulator and actual app controls. One capture test passed, verifying the name saves and the personal pin exists before capturing. Example names and notes are fixture data, not a user's travel records. Original app/map attribution remains visible; images were only resized and JPEG-encoded. The temporary screenshot test harness was restored afterward. No app source changes or new app release are part of this website update.

Verification: Node 24 production build and SEO validation passed for all 16 routes. Browser checks at 1440×1000 and 390×844 confirmed readable layouts, correct landscape orientation, no horizontal overflow, all screenshots decoding successfully, and both support disclosure controls opening. Existing portfolio tests and hosted PR preview checks are recorded on the PR. Signoff: ship through the existing required PR review; production is not updated until that PR is merged and deployed.

Contact follow-up: Support now has a small local click-to-reveal script; see `docs/nomadtime-support-site.md`. It adds no tracking or form provider.
