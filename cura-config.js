/* CURA configuration — edit the values below and push to GitHub. */
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

document.addEventListener("DOMContentLoaded", function () {
  const impact = CURA_CONFIG.impact || {};
  Object.keys(impact).forEach(function (key) {
    document.querySelectorAll('[data-impact="' + key + '"]').forEach(function (el) {
      el.textContent = impact[key] || "—";
    });
  });
});
