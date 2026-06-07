/* ============================================================
   CONTENU — lu depuis window.SITE_CONTENT
   (content.example.js commité ; content.js réel gitignoré, écrase)
============================================================ */
export const activities  = (window.SITE_CONTENT && window.SITE_CONTENT.activities) || [];
export const faqs        = (window.SITE_CONTENT && window.SITE_CONTENT.faqs)       || [];
export const docSections = (window.SITE_CONTENT && window.SITE_CONTENT.docs)       || [];
