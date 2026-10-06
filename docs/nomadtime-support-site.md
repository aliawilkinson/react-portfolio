# NomadTime support site milestone

Date: 2026-10-05. Owner: Alia Wilkinson. Scope: add NomadTime to Projects and provide permanent public URLs for its first iOS App Store release.

## Delivered source

- NomadTime card under Projects → Apps, using the approved compass-clock icon.
- Standalone overview, support, and privacy pages at `/nomadtime`, `/nomadtime/support`, and `/nomadtime/privacy`.
- Teal and gold styling, a real app screenshot, responsive layout, keyboard focus and skip navigation, reduced-motion support, and user-initiated email contact.
- Static pages do not load the portfolio's analytics, music embed, or application scripts. Privacy text identifies Vercel hosting and the app's MET Norway/Apple Maps services.
- Existing Vercel project and domain; no new service, account, dependency, or domain purchase.

## Verification

- Node 24 production build and SEO validation: passed for all 12 checked routes, including all three NomadTime pages.
- Existing test suite: 122 tests in 12 files passed.
- Browser checks: desktop 1440×1000 and mobile 390×844; support/privacy navigation, contact navigation, loaded images, no script errors on the new pages. Decorative artwork is contained to prevent horizontal scrolling.
- Vite preview and production routing both map the clean URLs to standalone HTML. Production URL/readback verification follows the PR deployment; local checks alone do not prove publication.

## Signoff

Ship the support-site milestone after the PR and deployment checks. This does not submit or publish the iOS app. Public-release availability remains clearly labeled as coming soon; App Store listing and in-app links are updated separately in NomadTime's existing release PR.


## Contact presentation update

The overview, support, and privacy HTML no longer publish a plaintext email address or direct `mailto:` link. All contact links lead to `/nomadtime/support#contact`. An accessible Contact support button reveals Open email app and Copy email address actions. The email link is constructed only after activation and removed again when collapsed. Clipboard denial presents a manual-copy fallback only after that explicit action. If the small local script does not run, an existing public LinkedIn contact link remains available.

The support page now loads a small, local `contact.js`; overview and privacy stay script-free. No form submission, analytics, third-party widget, package, or service was added. The address encoding deters simple HTML scrapers only; browser automation or source inspection can recover it. This is not a private server-side contact relay and does not undo prior publication of the address.

Validation: source and built HTML checked for plaintext email/mailto exposure on all three pages; Node 24 production/SEO build passed for 16 routes; browser verified initial hidden state, reveal/collapse, copy success, clipboard-denied fallback, live feedback, and 390px layout. No email was sent. Signoff: ship via the portfolio PR review and deployment checks.
