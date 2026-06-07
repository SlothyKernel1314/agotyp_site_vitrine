/* ============================================================
   POPULATE — remplit le DOM depuis window.SITE_CONFIG
   Partagé par index.html et mentions-legales.html.
   Rendu en textContent / attributs (pas d'innerHTML) → sûr.
============================================================ */
(function () {
  const cfg   = window.SITE_CONFIG || {};
  const texts = (window.SITE_CONTENT && window.SITE_CONTENT.texts) || {};

  // Remplace les {clé} d'un gabarit par les valeurs de la config
  function tpl(str) {
    return str.replace(/\{(\w+)\}/g, (_, k) => (cfg[k] != null ? cfg[k] : ''));
  }

  function populate() {
    // Texte simple :  <… data-cfg="clé">
    document.querySelectorAll('[data-cfg]').forEach(el => {
      const v = cfg[el.dataset.cfg];
      if (v != null) el.textContent = v;
    });

    // Prose éditoriale (SITE_CONTENT.texts) :  <… data-txt="clé"> (résout aussi les {tokens})
    document.querySelectorAll('[data-txt]').forEach(el => {
      const v = texts[el.dataset.txt];
      if (v != null) el.textContent = tpl(v);
    });

    // Prose multi-paragraphes :  <… data-txt-list="clé"> (tableau → un <p> par item)
    document.querySelectorAll('[data-txt-list]').forEach(el => {
      const arr = texts[el.dataset.txtList];
      if (Array.isArray(arr)) {
        el.textContent = '';
        arr.forEach(p => {
          const para = document.createElement('p');
          para.textContent = tpl(p);
          el.appendChild(para);
        });
      }
    });

    // Texte « gabarit » :  <… data-cfg-tpl="© {year} {name}…">
    document.querySelectorAll('[data-cfg-tpl]').forEach(el => {
      el.textContent = tpl(el.dataset.cfgTpl);
    });

    // Hébergeur (objet imbriqué) :  <… data-cfg-host="name|address|phone">
    // Valeur vide/absente → on masque la ligne (et le <br> qui la précède).
    document.querySelectorAll('[data-cfg-host]').forEach(el => {
      const v = cfg.host && cfg.host[el.dataset.cfgHost];
      if (v) {
        el.textContent = v;
      } else {
        el.style.display = 'none';
        const prev = el.previousElementSibling;
        if (prev && prev.tagName === 'BR') prev.style.display = 'none';
      }
    });

    // Lien e-mail :  <a data-cfg-mailto="email">
    document.querySelectorAll('[data-cfg-mailto]').forEach(el => {
      const v = cfg[el.dataset.cfgMailto];
      if (v) el.setAttribute('href', 'mailto:' + v);
    });

    // Lien téléphone :  <a data-cfg-tel="phone">
    document.querySelectorAll('[data-cfg-tel]').forEach(el => {
      const v = cfg[el.dataset.cfgTel];
      if (v) el.setAttribute('href', 'tel:' + String(v).replace(/[^\d+]/g, ''));
    });

    // Attribut « content » (méta) :  <meta data-cfg-content="metaDescription">
    document.querySelectorAll('[data-cfg-content]').forEach(el => {
      const v = cfg[el.dataset.cfgContent];
      if (v != null) el.setAttribute('content', v);
    });

    // aria-label « gabarit » :  <… data-cfg-aria-label="{name} — …">
    document.querySelectorAll('[data-cfg-aria-label]').forEach(el => {
      el.setAttribute('aria-label', tpl(el.dataset.cfgAriaLabel));
    });

    // Titre de la page :  <html data-cfg-title="{name} — {type}">
    const t = document.documentElement.dataset.cfgTitle;
    if (t) document.title = tpl(t);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
})();
