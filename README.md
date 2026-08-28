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
