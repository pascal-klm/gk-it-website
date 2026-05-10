const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const downloadLink = document.querySelector(".nav-download");
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const colorSchemeQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;
let hasManualThemeSelection = false;

const setLightMode = (isLightMode) => {
  document.body.classList.toggle("light-mode", isLightMode);

  if (themeToggle) {
    themeToggle.textContent = isLightMode ? "Dark Mode" : "Light Mode";
    themeToggle.setAttribute("aria-pressed", String(isLightMode));
  }
};

setLightMode(Boolean(colorSchemeQuery?.matches));

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (downloadLink) {
  downloadLink.addEventListener("click", (event) => {
    const shouldDownload = window.confirm(
      "Möchten Sie TeamViewer QuickSupport jetzt herunterladen?"
    );

    if (!shouldDownload) {
      event.preventDefault();
    }
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    hasManualThemeSelection = true;
    setLightMode(!document.body.classList.contains("light-mode"));

    if (navLinks && navToggle) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (colorSchemeQuery) {
  colorSchemeQuery.addEventListener("change", (event) => {
    if (!hasManualThemeSelection) {
      setLightMode(event.matches);
    }
  });
}
