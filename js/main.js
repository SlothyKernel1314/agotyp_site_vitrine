/* ============================================================
   MAIN — entry point (ES module)
   Reads window.SITE_CONFIG/SITE_CONTENT (set by the config/content
   scripts loaded before) and orchestrates rendering.
============================================================ */
import { renderActivities, initActivitiesShowMore } from './activities.js';
import { renderFAQ } from './faq.js';
import { renderDocs } from './docs.js';
import { initScrollReveal, initProgressBar, initActiveNavLinks, initKeyboardHelpers } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  renderActivities();
  initActivitiesShowMore();
  renderFAQ();
  renderDocs();
  initScrollReveal();
  initProgressBar();
  initActiveNavLinks();
  initKeyboardHelpers();
});
