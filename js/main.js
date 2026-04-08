/* ════════════════════════════════════════════════════════
   main.js — Portfolio interactions
   ════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Page loader ── */
  window.addEventListener('load', function () {
    var loader = document.getElementById('page-loader');
    if (!loader) return;
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.4s ease';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 420);
  });

  /* ── Dark / Light theme toggle ── */
  var themeBtn = document.getElementById('theme-toggle');
  function updateThemeLabel() {
    if (!themeBtn) return;
    var isDark = document.documentElement.classList.contains('dark');
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (themeBtn) {
    updateThemeLabel();
    themeBtn.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeLabel();
    });
  }

  /* ── Scrolled header ── */
  var header = document.getElementById('site-header');
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Active nav link on scroll ── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href');
          if (href === '#' + entry.target.id) {
            link.style.color = 'var(--accent)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function (s) { navObserver.observe(s); });

  /* ── Mobile menu ── */
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');

  function closeMobileMenu() {
    if (!mobileNav || !mobileBtn) return;
    mobileNav.classList.add('hidden');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Open navigation menu');
    if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', function () {
      var isOpen = !mobileNav.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileNav.classList.remove('hidden');
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileBtn.setAttribute('aria-label', 'Close navigation menu');
        if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      }
    });
    // Close menu when a link is tapped
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  /* ── Scroll reveal (IntersectionObserver) ── */
  var revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Respect animation-delay via data attribute or inline style
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ── Show all projects toggle ── */
  var showAllBtn = document.getElementById('show-all-btn');
  var allGrid = document.getElementById('all-projects-grid');
  if (showAllBtn && allGrid) {
    showAllBtn.addEventListener('click', function () {
      var isHidden = allGrid.classList.contains('hidden');
      if (isHidden) {
        allGrid.classList.remove('hidden');
        // Re-observe new elements
        allGrid.querySelectorAll('.reveal-up').forEach(function (el) {
          revealObserver && revealObserver.observe(el);
        });
        showAllBtn.textContent = 'Show less ↑';
        showAllBtn.setAttribute('aria-expanded', 'true');
        // Smooth scroll into view
        allGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        allGrid.classList.add('hidden');
        showAllBtn.textContent = 'View all →';
        showAllBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 64; // header height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

})();
