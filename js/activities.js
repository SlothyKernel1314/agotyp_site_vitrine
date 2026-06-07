import { esc } from './utils.js';
import { createCarousel } from './carousel.js';
import { activities } from './data.js';

/* ============================================================
   RENDER — Activity Cards avec carrousel
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

        <!-- Label de catégorie -->
        <span class="activity-card__label" aria-hidden="true">${esc(act.label)}</span>

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
        <h3 class="activity-card__name">${esc(act.name)}</h3>
        <p class="activity-card__desc">${esc(act.desc)}</p>
      </div>
    `;

    grid.appendChild(card);

    // Initialiser le carrousel pour cette carte
    createCarousel(card, act.images);
  });
}
