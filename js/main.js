/* ============================================================
   PEPPY LITTLE SECRET — main.js
   ============================================================ */

/* ------------------------------------------------------------
   CONFIG — EDIT THIS SECTION ONLY
   ------------------------------------------------------------ */
const PEPPY_CONFIG = {
  MENU_DOC_URL: "https://docs.google.com/document/d/1_ung_6zDAxQi7HPWs_VQ_C1Sn5NKnwrmwB4dMuDFXgM/edit",
  WHATSAPP_NUMBER: "19152691693",
  WHATSAPP_MESSAGE: "Hi! I found Peppy Little Secret and had a question. 🤎"
};
/* ------------------------------------------------------------ */

function getWhatsAppUrl() {
  return "https://wa.me/" + PEPPY_CONFIG.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(PEPPY_CONFIG.WHATSAPP_MESSAGE);
}

document.addEventListener("DOMContentLoaded", function() {

  /* Mobile menu toggle */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      var isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Insert "VIEW MENU" button into header, next to Contact */
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

    /* Insert "CHAT WITH US" button, styled as outline to sit quietly beside the others */
    var chatBtn = document.createElement("a");
    chatBtn.href = getWhatsAppUrl();
    chatBtn.target = "_blank";
    chatBtn.rel = "noopener noreferrer";
    chatBtn.className = "header-cta header-cta-chat";
    chatBtn.style.marginRight = "12px";
    chatBtn.textContent = "CHAT WITH US →";
    headerCta.parentNode.insertBefore(chatBtn, headerCta);
  }

  /* Insert matching links into mobile nav */
  var mobileNavEl = document.querySelector(".mobile-nav");
  if (mobileNavEl) {
    var mobileMenuLink = document.createElement("a");
    mobileMenuLink.href = PEPPY_CONFIG.MENU_DOC_URL;
    mobileMenuLink.target = "_blank";
    mobileMenuLink.rel = "noopener noreferrer";
    mobileMenuLink.textContent = "VIEW MENU";
    mobileNavEl.appendChild(mobileMenuLink);

    var mobileChatLink = document.createElement("a");
    mobileChatLink.href = getWhatsAppUrl();
    mobileChatLink.target = "_blank";
    mobileChatLink.rel = "noopener noreferrer";
    mobileChatLink.textContent = "CHAT WITH US →";
    mobileNavEl.appendChild(mobileChatLink);
  }

});
