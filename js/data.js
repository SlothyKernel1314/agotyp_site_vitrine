/* ============================================================
   CONTENT — read from window.SITE_CONTENT
   (content.example.js committed; real content.js gitignored, overrides)
============================================================ */
export const activities  = (window.SITE_CONTENT && window.SITE_CONTENT.activities) || [];
export const faqs        = (window.SITE_CONTENT && window.SITE_CONTENT.faqs)       || [];
export const docSections = (window.SITE_CONTENT && window.SITE_CONTENT.docs)       || [];
