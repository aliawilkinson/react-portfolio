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
