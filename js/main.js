/* ============================================================
   PEPPY LITTLE SECRET — main.js
   ============================================================ */

/* ------------------------------------------------------------
   CONFIG — EDIT THIS SECTION ONLY
   Paste your real Google Doc share link below, replacing the
   placeholder URL. Nothing else in this file needs to change.
   ------------------------------------------------------------ */
const PEPPY_CONFIG = {
  MENU_DOC_URL: "https://docs.google.com/document/u/0/d/1_ung_6zDAxQi7HPWs_VQ_C1Sn5NKnwrmwB4dMuDFXgM/mobilebasic?pli=1"
};
/* ------------------------------------------------------------ */


document.addEventListener("DOMContentLoaded", function() {

  /* Mobile menu toggle */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      var isOpen = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Insert "View Menu" button into header, next to Contact */
  var headerCta = document.querySelector(".header-cta");
  if (headerCta) {
    var menuBtn = document.createElement("a");
    menuBtn.href = PEPPY_CONFIG.MENU_DOC_URL;
    menuBtn.target = "_blank";
    menuBtn.rel = "noopener noreferrer";
    menuBtn.className = "header-cta";
    menuBtn.style.marginRight = "12px";
    menuBtn.textContent = "VIEW MENU";
    headerCta.parentNode.insertBefore(menuBtn, headerCta);
  }

  /* Insert matching link into mobile nav */
  var mobileNavEl = document.querySelector(".mobile-nav");
  if (mobileNavEl) {
    var mobileMenuLink = document.createElement("a");
    mobileMenuLink.href = PEPPY_CONFIG.MENU_DOC_URL;
    mobileMenuLink.target = "_blank";
    mobileMenuLink.rel = "noopener noreferrer";
    mobileMenuLink.textContent = "VIEW MENU";
    mobileMenuLink.style.fontWeight = "600";
    mobileNavEl.appendChild(mobileMenuLink);
  }

});
