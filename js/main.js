/* =========================================================
   Portfolio — main.js
   Features: dark mode, mobile nav, project filtering,
   "more info" project detail modal, contact form, scroll reveal.
   ========================================================= */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Toast helper ---------- */
  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (toastEl.hidden = true), 3000);
  }

  /* ---------- Theme (dark mode) ---------- */
  const root = document.documentElement;
  const themeToggle = $('#themeToggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'), false);

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) localStorage.setItem('theme', theme);
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
    });
  }

  /* ---------- Mobile navigation ---------- */
  const navToggle = $('#navToggle');
  const navMenu = $('#navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Project filtering ---------- */
  const filterBtns = $$('.filter');
  const cards = $$('#projectGrid .card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter;
      cards.forEach((card) => {
        const show = f === 'all' || card.dataset.category === f;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- Project "more info" modal ---------- */
  const modal = $('#projectModal');
  const pmImg = $('#pmImg');
  const pmTitle = $('#pmTitle');
  const pmCat = $('#pmCat');
  const pmYear = $('#pmYear');
  const pmRole = $('#pmRole');
  const pmMedium = $('#pmMedium');
  const pmDesc = $('#pmDesc');
  const pmLink = $('#pmLink');
  let lastFocused = null;

  function openModal(card) {
    lastFocused = card;
    const img = card.querySelector('img');
    pmImg.src = img.src;
    pmImg.alt = img.alt || '';
    pmTitle.textContent = card.dataset.title || '';
    pmCat.textContent = card.querySelector('.card-cat')?.textContent || card.dataset.category || '';
    pmYear.textContent = card.dataset.year || '—';
    pmRole.textContent = card.dataset.role || '—';
    pmMedium.textContent = card.dataset.medium || '—';
    pmDesc.textContent = card.dataset.desc || '';
    const link = card.dataset.link;
    if (link) {
      pmLink.href = link;
      pmLink.hidden = false;
    } else {
      pmLink.hidden = true;
    }
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#pmClose').focus();
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });
  $('#pmClose')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal?.hidden) return;
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Contact form (mailto fallback) ---------- */
  const form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      const message = $('#message').value.trim();
      const mailto =
        'mailto:hello@example.com' +
        '?subject=' + encodeURIComponent('Portfolio enquiry from ' + (name || 'a visitor')) +
        '&body=' + encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      $('#formNote').hidden = false;
      toast('Opening your email client…');
      window.location.href = mailto;
      form.reset();
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealables = $$('.card, .skills li, .contact-form');
  revealables.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add('is-visible'));
  }
})();
