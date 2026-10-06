(() => {
  const themeKey = "bika-color-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  let savedTheme = "starry";
  try {
    savedTheme = localStorage.getItem(themeKey) === "forest" ? "forest" : "starry";
  } catch {
    // The switch still works for this page even if browser storage is unavailable.
  }

  function applyTheme(theme) {
    const isForest = theme === "forest";
    root.dataset.theme = isForest ? "forest" : "starry";
    toggle.textContent = isForest ? "≋ 海洋系" : "♧ 森林系";
    toggle.setAttribute("aria-label", isForest ? "切換為海洋系配色" : "切換為森林系配色");
    toggle.setAttribute("aria-pressed", String(isForest));
  }

  applyTheme(savedTheme);
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "forest" ? "starry" : "forest";
    try {
      localStorage.setItem(themeKey, nextTheme);
    } catch {
      // Theme switching remains available for the current page.
    }
    applyTheme(nextTheme);
  });
})();