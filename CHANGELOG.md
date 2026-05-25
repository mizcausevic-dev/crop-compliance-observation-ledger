# Changelog

## v1.0.0-prod — 2026-05-25

- Platform/SRE hardening pass (Claude Code lane): deploy-time SEO assets — `robots.txt` + `sitemap.xml` generation and OpenGraph/Twitter/meta-description injection (`scripts/seo-meta.mjs`) wired into the Pages workflow.
- Verified production gates: Node 20/22 CI matrix (lint, typecheck, coverage, build, demo, smoke, `npm audit`), 97% statement coverage on `src/services`, AGPL-3.0-or-later, Dependabot, SECURITY.md.
- Deployed to GitHub Pages at `crops.kineticgain.com` (TLS).

## v0.1-shipped

- Shipped a public TypeScript control plane for crop observations, evidence blockers, field posture, and buyer-safe agri compliance operations.
- Added `observation-lane`, `compliance-risks`, `field-posture`, `verification`, and `docs` routes.
- Added doctrine-forward packaging:
  - `AGPL-3.0-or-later`
  - top-level `screenshots/`
  - `docs/KINETIC_GAIN_EMBEDDED.md`
  - vitest coverage gate
  - annotated release tagging
- Deploy target: static prerender → GitHub Pages at `crops.kineticgain.com`.
