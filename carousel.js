// Services carousel: previous/next buttons and a progress bar for a scroll-snap row.
// Without this script the row still scrolls sideways by touch, trackpad or keyboard.
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.service-cards');
  const [prev, next] = carousel.querySelectorAll('.carousel-btn');
  const bar = carousel.querySelector('.carousel-progress span');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const step = () => {
    const card = track.querySelector('.service-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const pos = max > 0 ? track.scrollLeft / max : 1;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
    // The indicator is as wide as the visible share of the row and slides along with it.
    const visible = Math.min(track.clientWidth / track.scrollWidth, 1) * 100;
    bar.style.width = `${visible}%`;
    bar.style.marginLeft = `${pos * (100 - visible)}%`;
  };

  [prev, next].forEach((btn) => btn.addEventListener('click', () => {
    track.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: reduce ? 'auto' : 'smooth' });
  }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
