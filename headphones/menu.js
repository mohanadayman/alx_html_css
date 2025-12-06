document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');
  if (!navToggle || !siteNav) return;

  // ensure initial state
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', function (e) {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Close when clicking outside the nav on mobile
  document.addEventListener('click', function (e) {
    if (!siteNav.classList.contains('open')) return;
    if (!e.target.closest('.site-nav') && !e.target.closest('.nav-toggle')) {
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
});
