/* ============================================================
   DATA — Activities
============================================================ */
const activities = [
  {
    label: 'Permanence',
    name: 'Activités Libres',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam.',
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'JDR',
    name: 'Jeu de rôle',
    desc: "Une partie de jeu de rôle se déroule généralement autour d'une table ou en ligne, avec des joueurs et un maître de jeu (MJ). Le MJ est le narrateur qui établit le cadre de l'aventure et guide les joueurs à travers divers défis.",
   images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
    ],
  },
  {
    label: 'Cuisine',
    name: 'Atelier cuisine',
    desc: 'Des ateliers de cuisine conviviaux pour partager des recettes, apprendre ensemble et créer du lien autour des plaisirs gustatifs dans un cadre bienveillant.',
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'Soirée JV',
    name: 'Soirée Jeux Vidéo',
    desc: "Rejoignez nos sessions de jeux en ligne pour vous amuser ensemble, à votre rythme, depuis chez vous ou depuis l'espace. Un moment de détente et de partage.",
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'Sorties',
    name: 'Sorties & Loisirs',
    desc: 'Musées, parcs, cinémas : des sorties adaptées et préparées ensemble pour découvrir la ville dans un cadre sécurisant et en bonne compagnie.',
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'Nanaragora',
    name: 'Après midi Nanars',
    desc: " Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'Golf',
    name: 'Practice au Golf',
    desc: "Rejoignez nos sessions de jeux en ligne pour vous amuser ensemble, à votre rythme, depuis chez vous ou depuis l'espace. Un moment de détente et de partage.",
    images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
  {
    label: 'Animaux',
    name: 'Médiation Animale',
    desc: 'Musées, parcs, cinémas : des sorties adaptées et préparées ensemble pour découvrir la ville dans un cadre sécurisant et en bonne compagnie.',
   images: [
      { src: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Dés de jeu de rôle sur une table' },
      { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&q=80', alt: 'Plateau de jeu de rôle avec figurines' },
      { src: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Joueurs autour d\'une table de JDR' },
    ],
  },
];

/* ============================================================
   DATA — FAQ
============================================================ */
const faqs = [
  {
    q: `Qui peut rejoindre le GEM ${(window.SITE_CONFIG && window.SITE_CONFIG.name) || 'Lorem Ipsum'} ?`,
    a: "Le GEM est ouvert à toute personne adulte se reconnaissant dans le spectre autistique. Aucun diagnostic officiel n'est requis pour participer à nos activités.",
  },
  {
    q: 'Ai-je besoin d\'une notification MDPH ?',
    a: "Non, le GEM n'est pas un dispositif médico-social.",
  },
  {
    q: 'Comment fonctionnent les activités ?',
    a: 'Les activités sont proposées chaque semaine et animées par les membres eux-mêmes. Vous pouvez venir à votre rythme, essayer différentes activités, et proposer les vôtres au fil du temps.',
  },
  {
    q: 'Le GEM est-il gratuit ?',
    a: "Non, le GEM s'inscrit dans une logique associative. À ce titre l'adhésion est fixée à la somme de 20€ par an.",
  },
  {
    q: 'Comment rejoindre le GEM ?',
    a: "Rien de plus simple : contactez-nous par email ou par téléphone pour planifier une première visite de découverte. Pas d'engagement requis !",
  },
  {
    q: 'Y a-t-il des professionnels de santé au GEM ?',
    a: "Non; c'est précisément ce qui distingue le GEM d'autres structures. Il est géré par et pour les personnes autistes, dans un esprit d'entraide entre pairs, sans relation soignant-soigné.",
  },
  {
    q: 'Y a-t-il des professionnels au GEM ?',
    a: "Oui, nous avons une animatrice présente au GEM.",
  },
];

/* ============================================================
   CAROUSEL —  Move cards on its own
============================================================ */


function createCarousel(card, images) {
  let currentIndex = 0;
  const total = images.length;

  const track      = card.querySelector('.carousel__track');
  const dotsWrap   = card.querySelector('.carousel__dots');
  const btnPrev    = card.querySelector('.carousel__btn--prev');
  const btnNext    = card.querySelector('.carousel__btn--next');
  const counter    = card.querySelector('.carousel__counter');

  // --- Slides maker ---
  images.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel__slide';
    slide.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false');

    const image = document.createElement('img');
    image.src     = img.src;
    image.alt     = img.alt;
    image.loading = 'lazy';
    image.decoding = 'async';

    slide.appendChild(image);
    track.appendChild(slide);
  });

  // --- Dots maker ---
  images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `carousel__dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Image ${i + 1} sur ${total}`);
    dot.setAttribute('type', 'button');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  // --- Navigation functions ---
  function goTo(index) {
    // Deactivate current slide
    const slides = track.querySelectorAll('.carousel__slide');
    const dots   = dotsWrap.querySelectorAll('.carousel__dot');

    slides[currentIndex].setAttribute('aria-hidden', 'true');
    dots[currentIndex].classList.remove('active');

    // Update index
    currentIndex = (index + total) % total;

    // Activate new slide
    slides[currentIndex].setAttribute('aria-hidden', 'false');
    dots[currentIndex].classList.add('active');

    // Move track
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update counter
    if (counter) counter.textContent = `${currentIndex + 1} / ${total}`;

    // Accessibility
    btnPrev.setAttribute('aria-label', `Image précédente (${((currentIndex - 1 + total) % total) + 1} sur ${total})`);
    btnNext.setAttribute('aria-label', `Image suivante (${((currentIndex + 1) % total) + 1} sur ${total})`);
  }

  // --- Buttons prev / next ---
  btnPrev.addEventListener('click', () => goTo(currentIndex - 1));
  btnNext.addEventListener('click', () => goTo(currentIndex + 1));

  // --- Swipe tactile ---
  let touchStartX = 0;
  let touchDeltaX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      touchDeltaX < 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
    }
    touchDeltaX = 0;
  });

  // --- Keyboard navigation ---
  card.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(currentIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
  });

  // Reset counter
  if (counter) counter.textContent = `1 / ${total}`;

  // Hide button if only one image
  if (total <= 1) {
    btnPrev.style.display = 'none';
    btnNext.style.display = 'none';
  }
}

/* ============================================================
   RENDER — Activity Cards avec carrousel
============================================================ */
function renderActivities() {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;

  activities.forEach((act, i) => {
    const card = document.createElement('article');
    card.className   = 'activity-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    card.innerHTML = `
      <div class="activity-card__img" role="region" aria-label="Carrousel : ${act.name}">

        <!-- Label de catégorie -->
        <span class="activity-card__label" aria-hidden="true">${act.label}</span>

        <!-- Compteur -->
        <span class="carousel__counter" aria-live="polite" aria-atomic="true"></span>

        <!-- Track des slides -->
        <div class="carousel__track-wrap">
          <div class="carousel__track"></div>
        </div>

        <!-- Boutons navigation -->
        <button class="carousel__btn carousel__btn--prev" type="button" aria-label="Image précédente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button class="carousel__btn carousel__btn--next" type="button" aria-label="Image suivante">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- Points de pagination -->
        <div class="carousel__dots" role="group" aria-label="Sélectionner une image"></div>

      </div>

      <div class="activity-card__body">
        <h3 class="activity-card__name">${act.name}</h3>
        <p class="activity-card__desc">${act.desc}</p>
      </div>
    `;

    grid.appendChild(card);

    // Initialiser le carrousel pour cette carte
    createCarousel(card, act.images);
  });
}


/* ============================================================
   RENDER — FAQ Accordion
============================================================ */
function renderFAQ() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  faqs.forEach((item, i) => {
    const el       = document.createElement('div');
    el.className   = 'faq__item';
    el.setAttribute('role', 'listitem');

    const answerId = `faq-answer-${i}`;
    const btnId    = `faq-btn-${i}`;

    el.innerHTML = `
      <button class="faq__question"
              id="${btnId}"
              aria-expanded="false"
              aria-controls="${answerId}">
        ${item.q}
        <span class="faq__icon" aria-hidden="true">+</span>
      </button>
      <div class="faq__answer"
           id="${answerId}"
           role="region"
           aria-labelledby="${btnId}">
        <div class="faq__answer-inner">${item.a}</div>
      </div>
    `;

    const btn = el.querySelector('.faq__question');
    btn.addEventListener('click', () => {
      const isOpen = el.classList.contains('open');

      // Close all open items
      document.querySelectorAll('.faq__item.open').forEach(openEl => {
        openEl.classList.remove('open');
        openEl.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Open the clicked item (unless it was already open)
      if (!isOpen) {
        el.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    faqList.appendChild(el);
  });
}

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
============================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================================
   PROGRESS BAR
============================================================ */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? scrolled / total : 0;
    bar.style.transform = `scaleX(${pct})`;
  }, { passive: true });
}

/* ============================================================
   ACTIVE NAV LINK — sidebar (desktop) + nav mobile
============================================================ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-link, .mobile-nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   KEYBOARD ACCESSIBILITY — Escape closes FAQ
============================================================ */
function initKeyboardHelpers() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.faq__item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/* ============================================================
   DATA — Documentation
============================================================ */
/* Sections de documentation (ordre d'affichage = ordre du tableau).
   Chaque section est rendue en carrousel. */
const docSections = [
  {
    id:    'cadre-associatif',
    title: 'Cadre associatif',
    items: [
      {
        title: 'Statuts',
        desc:  "Statuts de l'association Agoratypique.",
        file:  'docs/agotyp_statuts_v.3.0.pdf',
        icon:  'rules',
      },
      {
        title: 'Règlement intérieur',
        desc:  'Règles de vie et de fonctionnement du GEM.',
        file:  'docs/agotyp_reglement_interieur_v.3.0.pdf',
        icon:  'rules',
      },
    ],
  },
  {
    id:    'rapports',
    title: "Rapports d'activité",
    items: [
      {
        title: "Rapport d'activité 2024",
        desc:  "Bilan de l'année 2024 : activités, membres, projets.",
        file:  'docs/agotyp_rapport_activite_2024.pdf',
        icon:  'report',
      },
    ],
  },
  {
    id:    'cadre-legislatif',
    title: 'Cadre législatif',
    items: [
      {
        title: 'Cahier des charges',
        desc:  'Cahier des charges du GEM.',
        file:  'docs/cahier_des_charges_gem.pdf',
        icon:  'rules',
      },
    ],
  },
];

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

function renderDocs() {
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
      <p class="doc-card__title">${doc.title}</p>
      <p class="doc-card__desc">${doc.desc}</p>
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

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderActivities();
  renderFAQ();
  renderDocs();
  initScrollReveal();
  initProgressBar();
  initActiveNavLinks();
  initKeyboardHelpers();
});