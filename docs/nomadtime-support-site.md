# NomadTime support site milestone

Date: 2026-10-05. Owner: Alia Wilkinson. Scope: add NomadTime to Projects and provide permanent public URLs for its first iOS App Store release.

## Delivered source

- NomadTime card under Projects → Apps, using the approved compass-clock icon.
- Standalone overview, support, and privacy pages at `/nomadtime`, `/nomadtime/support`, and `/nomadtime/privacy`.
- Teal and gold styling, a real app screenshot, responsive layout, keyboard focus and skip navigation, reduced-motion support, and direct email contact.
- Static pages do not load the portfolio's analytics, music embed, or application scripts. Privacy text identifies Vercel hosting and the app's MET Norway/Apple Maps services.
- Existing Vercel project and domain; no new service, account, dependency, or domain purchase.

## Verification

- Node 24 production build and SEO validation: passed for all 12 checked routes, including all three NomadTime pages.
- Existing test suite: 122 tests in 12 files passed.
- Browser checks: desktop 1440×1000 and mobile 390×844; support/privacy navigation, visible support address, loaded images, no script errors on the new pages. Decorative artwork is contained to prevent horizontal scrolling.
- Vite preview and production routing both map the clean URLs to standalone HTML. Production URL/readback verification follows the PR deployment; local checks alone do not prove publication.

## Signoff

Ship the support-site milestone after the PR and deployment checks. This does not submit or publish the iOS app. Public-release availability remains clearly labeled as coming soon; App Store listing and in-app links are updated separately in NomadTime's existing release PR.
