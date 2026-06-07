import { esc } from './utils.js';
import { faqs } from './data.js';

/* ============================================================
   RENDER — FAQ Accordion
============================================================ */
export function renderFAQ() {
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
        ${esc(item.q)}
        <span class="faq__icon" aria-hidden="true">+</span>
      </button>
      <div class="faq__answer"
           id="${answerId}"
           role="region"
           aria-labelledby="${btnId}">
        <div class="faq__answer-inner">${esc(item.a)}</div>
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
