const navToggle = document.querySelector(".trad-toggle");
const navLinks = document.querySelector(".trad-links");
const downloadLink = document.querySelector(".trad-download");
const year = document.querySelector("#year");

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
