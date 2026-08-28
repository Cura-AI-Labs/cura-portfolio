/* =========================================================
   CURA — PORTFOLIO CONFIGURATION
   ---------------------------------------------------------
   Edit the values below. Push to GitHub. Vercel updates
   the live site automatically.
   ========================================================= */

const CURA_CONFIG = {
  impact: {
    hours: "150+",
    seniorStakeholders: "40+",
    connections: "25+",
    workingSessions: "15+",
    linkedinImpressions: "12K+",
    activePartnerships: "4"
  }
};

/* Do not edit below this line. */
(function () {
  function applyCuraConfig() {
    const impact = CURA_CONFIG.impact || {};

    Object.keys(impact).forEach(function (key) {
      document.querySelectorAll('[data-impact="' + key + '"]').forEach(function (el) {
        el.textContent = impact[key] || "—";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyCuraConfig);
  } else {
    applyCuraConfig();
  }
})();
