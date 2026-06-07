/* ============================================================
   MAIN — point d'entrée (module ES)
   Lit window.SITE_CONFIG/SITE_CONTENT (définis par les scripts
   config/content chargés avant) et orchestre le rendu.
============================================================ */
import { renderActivities } from './activities.js';
import { renderFAQ } from './faq.js';
import { renderDocs } from './docs.js';
import { initScrollReveal, initProgressBar, initActiveNavLinks, initKeyboardHelpers } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  renderActivities();
  renderFAQ();
  renderDocs();
  initScrollReveal();
  initProgressBar();
  initActiveNavLinks();
  initKeyboardHelpers();
});
