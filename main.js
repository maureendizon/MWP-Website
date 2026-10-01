// Mobile menu toggle: the nav is a plain list on desktop and collapses behind a button on small screens.
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a') && nav.classList.contains('is-open')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    toggle.focus();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Services dropdown: opens on click (not hover) so it works with touch and keyboard.
document.querySelectorAll('.sub-toggle').forEach((btn) => {
  const item = btn.closest('.has-sub');
  const close = () => { btn.setAttribute('aria-expanded', 'false'); item.classList.remove('is-open'); };
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    item.classList.toggle('is-open', !open);
  });
  document.addEventListener('click', (e) => { if (!item.contains(e.target)) close(); });
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && item.classList.contains('is-open')) { e.stopPropagation(); close(); btn.focus(); }
  });
});
