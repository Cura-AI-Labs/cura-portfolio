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

## V2.4 — lighter narrative
- Added compact Impact snapshot to Home.
- Reduced Home philosophy from six principles to three concise filters.
- Simplified About page to focus on credibility and working style, removing framework-heavy sections.
- Kept Perspectives thinking-led and Portfolio as the deeper proof of work.

## V2.4 corrected Home layout
Reworked the Home impact snapshot and filter sections with explicit, scoped layout rules and responsive behavior.

## V2.4 final — Home content correction

Restored the concise Home statement and a lighter three-part filter rather than removing the original context entirely. Home flow is now: Hero → Statement → Impact Snapshot → Filter → Portfolio.

## V2.4.1 — Home rhythm
Tightened the Hero-to-Statement spacing so the Home page does not create a large dead zone before the Impact Snapshot.

## V2.4.2 — Home page pacing

Rebuilt the Home middle flow cleanly and tightened vertical spacing. The sequence is Hero → Statement → Impact Snapshot → Filter → Portfolio, with the existing Portfolio section preserved.

## V2.4.3 — tighter Home rhythm

Reduced the vertical space between the Home hero, statement, and Impact Snapshot without changing the content or visual hierarchy.

## V2.4.4 — overall page rhythm

Applied the same tighter editorial pacing to the Portfolio page so the large hero area and transitions do not feel disproportionately spacious. Changes are scoped to Portfolio and do not alter content.

## V2.4.5 — site-wide whitespace pass

Reviewed and tightened vertical rhythm across Home, Portfolio, Perspectives, and About. Added explicit page classes and one coherent spacing layer instead of repeated incremental overrides.

## V2.5 — CURA purpose statement

Added the positioning line: “Helping deep-tech ideas cross the gap between research and real-world value.” to the Home hero, while preserving the existing narrative and site rhythm.

## V2.5.1 — crisper CURA proposition

Changed the Home positioning line to: “Connecting deep-tech ideas with research and real-world value.” and tightened its visual treatment.

## V2.5.2 — site-wide content cleanup

Reviewed Home, Portfolio, Perspectives and About for duplicated positioning, self-referential language and filler copy. Reduced explanatory text while preserving the portfolio evidence, engagement model and core voice.


Version 2.6 adds Navera Ventures as a fifth portfolio engagement and a featured link to the co-founder platform walkthrough. The video opens on LinkedIn because a directly embeddable video URL was not available.


## V2.7 — Navera featured first
- Moved Navera Ventures to the first position on Home and Portfolio.
- Added Navera to the Home portfolio snapshot and renumbered the five engagements consistently.
- Updated the co-founder/platform walkthrough link to the supplied YouTube video.
- Standardized portfolio-card content alignment and spacing.


## v3.0 homepage layout fix
The homepage portfolio snapshot contains five cards: four standard cards in a 2×2 desktop grid, followed by the fifth card spanning both columns. On mobile, all five cards stack in one column. If a live deployment still shows six tiles, it is serving a different or cached version of index.html/styles.css; this ZIP itself contains five portfolio-card anchors in index.html.
