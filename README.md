# CURA Portfolio v2

Four-page editorial portfolio foundation: Home, Portfolio, Perspectives, About.
The existing cura-discover Vercel project is intentionally untouched.

## Official portfolio links
- AgentID: https://agntid.ai/
- LogiModel: https://www.logimodel.com/
- Zeta Space Launchpad: https://www.zetaspace.co/outreach
- CMUL8: https://www.cmul8.com/

## V2.2 UI update
- Unified portfolio card grid on Home and Portfolio
- Added Impact Metrics and Beyond the Numbers framework


## V2.3 — Simple portfolio configuration

The public Impact Metrics are controlled from `cura-config.json`.

To update a number:
1. Open `cura-config.json`.
2. Change the value in the `impact` section.
3. Save.
4. Commit and push to GitHub.
5. Vercel will redeploy and the live site will reflect the change.

No HTML changes are required for the Impact Metrics.


## V2.3.1 — Simplified Impact Metrics

Impact Metrics are now controlled directly from `cura-config.js`.

Edit only the values inside `CURA_CONFIG.impact`, save, commit and push. No HTML changes are needed.

`cura-config.json` is retained as a reference copy, but the live page does not depend on fetching it.


## V2.3.2 — Robust config loader

`cura-config.js` is now the single editable source for Impact Metrics.

- Edit only the values inside `CURA_CONFIG.impact`.
- Push to GitHub.
- Vercel redeploys automatically.
- The loader works whether the DOM is still loading or already ready.
- No JSON fetch is required by the live site.
