import { esc } from './utils.js';
import { createCarousel } from './carousel.js';
import { activities } from './data.js';

/* ============================================================
   RENDER — Activity cards with carousel
============================================================ */
export function renderActivities() {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;

  activities.forEach((act, i) => {
    const card = document.createElement('article');
    card.className   = 'activity-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;

    card.innerHTML = `
      <div class="activity-card__img" role="region" aria-label="Carrousel : ${esc(act.name)}">

        <!-- Category label -->
        <span class="activity-card__label" aria-hidden="true">${esc(act.label)}</span>

        <!-- Counter -->
        <span class="carousel__counter" aria-live="polite" aria-atomic="true"></span>

        <!-- Slides track -->
        <div class="carousel__track-wrap">
          <div class="carousel__track"></div>
        </div>

        <!-- Navigation buttons -->
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

        <!-- Pagination dots -->
        <div class="carousel__dots" role="group" aria-label="Sélectionner une image"></div>

      </div>

      <div class="activity-card__body">
        <h3 class="activity-card__name">${esc(act.name)}</h3>
        <p class="activity-card__desc">${esc(act.desc)}</p>
      </div>
    `;

    grid.appendChild(card);

    // Initialize the carousel for this card
    createCarousel(card, act.images);
  });
}

/* ============================================================
   SHOW MORE — single-column (mobile) only: show the first N cards,
   reveal the rest via a button. Full grid stays on larger screens.
============================================================ */
const VISIBLE_ON_MOBILE = 4;
const singleColumn = window.matchMedia('(max-width: 480px)');

export function initActivitiesShowMore() {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.activity-card'));
  if (cards.length <= VISIBLE_ON_MOBILE) return;   // nothing to fold
  const extra = cards.slice(VISIBLE_ON_MOBILE);

  // Toggle button, inserted right after the grid
  const wrap = document.createElement('div');
  wrap.className = 'activities__more';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'activities__more-btn';
  btn.setAttribute('aria-controls', 'activitiesGrid');
  wrap.appendChild(btn);
  grid.insertAdjacentElement('afterend', wrap);

  let expanded = false;

  // A revealed card must never stay at opacity:0: the .reveal observer
  // can't fire while a card is display:none, so force .visible here.
  function reveal(card) {
    card.hidden = false;
    card.classList.add('visible');
  }

  function render() {
    if (singleColumn.matches) {
      wrap.hidden = false;
      extra.forEach(card => {
        if (expanded) reveal(card);
        else card.hidden = true;
      });
      btn.setAttribute('aria-expanded', String(expanded));
      btn.textContent = expanded ? 'Voir moins' : "Voir plus d'activités";
    } else {
      // Larger screens: everything visible, button removed from the flow
      wrap.hidden = true;
      extra.forEach(card => { if (card.hidden) reveal(card); });
    }
  }

  btn.addEventListener('click', () => { expanded = !expanded; render(); });
  singleColumn.addEventListener('change', render);
  render();
}
