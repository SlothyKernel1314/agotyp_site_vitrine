import { esc } from './utils.js';
import { docSections } from './data.js';

/* ============================================================
   SVG ICONS — Documents
============================================================ */
const docIcons = {
  rules: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="4" fill="#8c6f7a" opacity="0.15"/>
    <rect x="8" y="4" width="32" height="40" rx="4" stroke="#8c6f7a" stroke-width="2"/>
    <line x1="16" y1="16" x2="32" y2="16" stroke="#8c6f7a" stroke-width="2" stroke-linecap="round"/>
    <line x1="16" y1="22" x2="32" y2="22" stroke="#8c6f7a" stroke-width="2" stroke-linecap="round"/>
    <line x1="16" y1="28" x2="26" y2="28" stroke="#8c6f7a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="36" cy="36" r="8" fill="#e8843a"/>
    <path d="M33 36l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  report: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="4" fill="#3ecfbf" opacity="0.12"/>
    <rect x="8" y="4" width="32" height="40" rx="4" stroke="#3ecfbf" stroke-width="2"/>
    <rect x="14" y="28" width="4" height="10" rx="1" fill="#3ecfbf"/>
    <rect x="22" y="22" width="4" height="16" rx="1" fill="#3ecfbf" opacity="0.7"/>
    <rect x="30" y="17" width="4" height="21" rx="1" fill="#3ecfbf" opacity="0.5"/>
    <path d="M14 22 Q20 14 28 18 L34 13" stroke="#e8843a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="34" cy="13" r="2.5" fill="#e8843a"/>
  </svg>`,
};

/* ============================================================
   RENDER — Documentation
============================================================ */

/* Nombre de cartes visibles à la fois dans un carrousel de documents */
const DOCS_VISIBLE = 2;

/* Icônes de titre par section */
const docSectionIcons = {
  'cadre-associatif': `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 3h9l4 4v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
            stroke="currentColor" stroke-width="1.6"/>
      <path d="M13 3v5h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  'rapports': `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
      <path d="M5 10l3 3 7-6" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  'cadre-legislatif': `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 5C8.5 3.8 6.5 3.4 4 4v11c2.5-.6 4.5-.2 6 1 1.5-1.2 3.5-1.6 6-1V4c-2.5-.6-4.5-.2-6 1z"
            stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M10 5v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
};

export function renderDocs() {
  const container = document.getElementById('docsLayout');
  if (!container) return;

  docSections.forEach((section, i) => {
    const sec = document.createElement('div');
    sec.className = `docs__section reveal reveal-delay-${i + 1}`;

    const heading = document.createElement('h3');
    heading.className = 'docs__section-title';
    heading.innerHTML = `${docSectionIcons[section.id] || ''} ${section.title}`;
    sec.appendChild(heading);

    sec.appendChild(createDocsCarousel(section.items));
    container.appendChild(sec);
  });
}

/* ── Construit un carrousel de cartes documents (s'adapte au nb d'éléments) ── */
function createDocsCarousel(items) {
  const total    = items.length;
  const visible  = Math.min(DOCS_VISIBLE, total);
  const maxIndex = Math.max(0, total - visible);

  const wrap = document.createElement('div');
  wrap.className = 'docs-carousel';

  // Bouton précédent
  const btnPrev = document.createElement('button');
  btnPrev.className = 'docs-carousel__btn docs-carousel__btn--prev';
  btnPrev.type = 'button';
  btnPrev.setAttribute('aria-label', 'Document précédent');
  btnPrev.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  // Viewport + track
  const viewport = document.createElement('div');
  viewport.className = 'docs-carousel__viewport';

  const track = document.createElement('div');
  track.className = 'docs-carousel__track';

  items.forEach(doc => {
    const item = document.createElement('div');
    item.className = 'docs-carousel__item';
    // largeur d'une carte = (100% - gaps) / nb visibles
    item.style.flex = `0 0 calc((100% - ${(visible - 1)}rem) / ${visible})`;
    item.appendChild(makeDocCard(doc));
    track.appendChild(item);
  });

  viewport.appendChild(track);

  // Bouton suivant
  const btnNext = document.createElement('button');
  btnNext.className = 'docs-carousel__btn docs-carousel__btn--next';
  btnNext.type = 'button';
  btnNext.setAttribute('aria-label', 'Document suivant');
  btnNext.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  wrap.appendChild(btnPrev);
  wrap.appendChild(viewport);
  wrap.appendChild(btnNext);

  // ── Logique carrousel ──
  let currentIndex = 0;

  function updateCarousel() {
    const pct = (100 / visible) * currentIndex;
    track.style.transform = `translateX(-${pct}%)`;
    btnPrev.classList.toggle('docs-carousel__btn--hidden', currentIndex === 0);
    btnNext.classList.toggle('docs-carousel__btn--hidden', currentIndex >= maxIndex);
  }

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateCarousel(); }
  });
  btnNext.addEventListener('click', () => {
    if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
  });

  // Swipe tactile
  let touchStartX = 0;
  viewport.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0 && currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
      if (delta < 0 && currentIndex > 0)        { currentIndex--; updateCarousel(); }
    }
  });

  updateCarousel(); // état initial
  return wrap;
}

/* ── Fabrique une carte document ── */
function makeDocCard(doc) {
  const card = document.createElement('a');
  card.className   = 'doc-card';
  card.href        = doc.file;
  card.target      = '_blank';
  card.rel         = 'noopener noreferrer';
  card.setAttribute('aria-label', `Ouvrir le document : ${doc.title} (PDF)`);

  card.innerHTML = `
    <div class="doc-card__icon">${docIcons[doc.icon] || ''}</div>
    <div class="doc-card__body">
      <p class="doc-card__title">${esc(doc.title)}</p>
      <p class="doc-card__desc">${esc(doc.desc)}</p>
    </div>
    <div class="doc-card__badge">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 16h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
      PDF
    </div>
  `;

  return card;
}
