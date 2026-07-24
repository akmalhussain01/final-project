// =========================================================
// WANDERLUST ATLAS — shared behaviour
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initSearch();
  initContactForm();
  markActiveNavLink();
});

/* ---------- Mobile nav toggle ---------- */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const search = document.querySelector('.nav-search');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    if (search) search.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/* ---------- Highlight current page in nav ---------- */
function markActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
}

/* ---------- Search / filter destinations ---------- */
function initSearch() {
  const input = document.getElementById('destination-search');
  const button = document.getElementById('search-btn');
  const cards = document.querySelectorAll('.dest-card');
  const noResults = document.getElementById('no-results');

  if (!input || cards.length === 0) return;

  function runSearch() {
    const term = input.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = (card.dataset.name || '').toLowerCase();
      const tag = (card.dataset.tag || '').toLowerCase();
      const matches = term === '' || name.includes(term) || tag.includes(term);
      card.classList.toggle('is-hidden', !matches);
      if (matches) visibleCount += 1;
    });

    // Bring the matching section into view when searching from the nav
    if (term !== '' && visibleCount > 0) {
      const firstVisible = document.querySelector('.dest-card:not(.is-hidden)');
      if (firstVisible) {
        firstVisible.closest('.rec-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (noResults) noResults.classList.toggle('is-visible', visibleCount === 0);
  }

  button?.addEventListener('click', runSearch);
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') runSearch();
    else runSearch(); // live filter as the user types
  });
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showStatus(status, 'Please fill in every field before sending.', 'error');
      return;
    }
    if (!emailPattern.test(email)) {
      showStatus(status, 'That email address doesn\u2019t look right \u2014 please check it.', 'error');
      return;
    }

    // No backend is wired up yet, so we simulate a successful send.
    showStatus(status, `Thanks, ${name}! Your message has been received \u2014 we\u2019ll reply to ${email} soon.`, 'success');
    form.reset();
  });
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className = 'form-status ' + (type === 'success' ? 'is-success' : 'is-error');
}