(() => {
  "use strict";

  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || url.hostname !== window.location.hostname) {
        return;
      }

      const target = document.querySelector(url.hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });

      const collapseEl = document.querySelector("#navbarSupportedContent");
      if (collapseEl && collapseEl.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });
})();
