/* ============================================================
   CAROUSEL — Activity image carousel
============================================================ */


export function createCarousel(card, images) {
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

  // --- Touch swipe ---
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
