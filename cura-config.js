(function () {
  fetch("cura-config.json")
    .then(function (r) { return r.json(); })
    .then(function (cfg) {
      var impact = cfg.impact || {};
      var map = {
        "hours": impact.hours,
        "seniorStakeholders": impact.seniorStakeholders,
        "connections": impact.connections,
        "workingSessions": impact.workingSessions,
        "linkedinImpressions": impact.linkedinImpressions,
        "activePartnerships": impact.activePartnerships
      };
      Object.keys(map).forEach(function (key) {
        document.querySelectorAll('[data-impact="' + key + '"]').forEach(function (el) {
          el.textContent = map[key] || "—";
        });
      });
    })
    .catch(function () {
      // Keep the page usable if the config cannot be loaded.
    });
})();
