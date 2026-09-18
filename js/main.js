/* ============================================================
   PEPPY LITTLE SECRET — main.js
   ============================================================ */

/* ------------------------------------------------------------
   CONFIG — EDIT THIS SECTION ONLY
   ------------------------------------------------------------ */
const PEPPY_CONFIG = {
  MENU_DOC_URL: "peppy%20menu%20.png",
  WHATSAPP_NUMBER: "19152691693",
  WHATSAPP_MESSAGE: "Hi! I found Peppy Little Secret and had a question. 🤎"
};
/* ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", function() {

  /* Toggle the single dropdown menu (used at every screen size) */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      var isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Set View Menu links (fills in existing links, creates nothing) */
  document.querySelectorAll(".js-menu-link").forEach(function(link) {
    link.href = PEPPY_CONFIG.MENU_DOC_URL;
  });

 var chatUrl = "https://chat.whatsapp.com/DhNJEreQijb4PKKtCzz44q?s=cl&p=i&mlu=0&ilr=4";
document.querySelectorAll(".js-chat-link").forEach(function(link) {
  link.href = chatUrl;
});

});
