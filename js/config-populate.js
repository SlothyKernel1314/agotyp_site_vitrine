/* ============================================================
   POPULATE — fills the DOM from window.SITE_CONFIG
   Shared by index.html and legal.html.
   Rendered via textContent / attributes (no innerHTML) → safe.
============================================================ */
(function () {
  const cfg   = window.SITE_CONFIG || {};
  const texts = (window.SITE_CONTENT && window.SITE_CONTENT.texts) || {};

  // Build the display address line from the structured address (single source of truth)
  if (cfg.address) {
    const a = cfg.address;
    cfg.addressLine = [a.street, [a.postalCode, a.city].filter(Boolean).join(' ')]
      .filter(Boolean).join(' - ');
  }

  // Replace a template's {key} tokens with the config values
  function tpl(str) {
    return str.replace(/\{(\w+)\}/g, (_, k) => (cfg[k] != null ? cfg[k] : ''));
  }

  // Structured data (JSON-LD, schema.org NGO) built from the config — helps search engines
  function injectJsonLd() {
    if (!cfg.name) return;
    const a = cfg.address || {};
    const data = {
      '@context': 'https://schema.org',
      '@type': 'NGO',
      name: cfg.name,
      legalName: cfg.legalName,
      description: cfg.metaDescription,
      url: location.origin + '/',
      logo: location.origin + '/images/logo.svg',
      email: cfg.email,
      telephone: cfg.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        postalCode: a.postalCode,
        addressLocality: a.city,
        addressCountry: a.country,
      },
      areaServed: cfg.location,
    };
    if (cfg.rna) data.identifier = cfg.rna;   // n° RNA (association)
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(el);
  }

  function populate() {
    // Plain text:  <… data-cfg="key">
    document.querySelectorAll('[data-cfg]').forEach(el => {
      const v = cfg[el.dataset.cfg];
      if (v != null) el.textContent = v;
    });

    // Editorial prose (SITE_CONTENT.texts):  <… data-txt="key"> (also resolves {tokens})
    document.querySelectorAll('[data-txt]').forEach(el => {
      const v = texts[el.dataset.txt];
      if (v != null) el.textContent = tpl(v);
    });

    // Multi-paragraph prose:  <… data-txt-list="key"> (array → one <p> per item)
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

    // Templated text:  <… data-cfg-tpl="© {year} {name}…">
    document.querySelectorAll('[data-cfg-tpl]').forEach(el => {
      el.textContent = tpl(el.dataset.cfgTpl);
    });

    // Host (nested object):  <… data-cfg-host="name|address|phone">
    // Empty/missing value → hide the line (and the preceding <br>).
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

    // Email link:  <a data-cfg-mailto="email">
    document.querySelectorAll('[data-cfg-mailto]').forEach(el => {
      const v = cfg[el.dataset.cfgMailto];
      if (v) el.setAttribute('href', 'mailto:' + v);
    });

    // Phone link:  <a data-cfg-tel="phone">
    document.querySelectorAll('[data-cfg-tel]').forEach(el => {
      const v = cfg[el.dataset.cfgTel];
      if (v) el.setAttribute('href', 'tel:' + String(v).replace(/[^\d+]/g, ''));
    });

    // Map link:  <a data-cfg-map> → OpenStreetMap search for the structured address
    document.querySelectorAll('[data-cfg-map]').forEach(el => {
      const a = cfg.address;
      if (!a) return;
      const q = encodeURIComponent([a.street, a.postalCode, a.city].filter(Boolean).join(' '));
      el.setAttribute('href', 'https://www.openstreetmap.org/search?query=' + q);
    });

    // "content" attribute (meta):  <meta data-cfg-content="metaDescription">
    document.querySelectorAll('[data-cfg-content]').forEach(el => {
      const v = cfg[el.dataset.cfgContent];
      if (v != null) el.setAttribute('content', v);
    });

    // Templated aria-label:  <… data-cfg-aria-label="{name} — …">
    document.querySelectorAll('[data-cfg-aria-label]').forEach(el => {
      el.setAttribute('aria-label', tpl(el.dataset.cfgAriaLabel));
    });

    // Page title:  <html data-cfg-title="{name} — {type}">
    const t = document.documentElement.dataset.cfgTitle;
    if (t) document.title = tpl(t);

    injectJsonLd();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
})();
