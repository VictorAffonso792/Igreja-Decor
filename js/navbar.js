/* ===== NAVBAR ===== */
(function () {
  const nav = $('#nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30));

  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('aberto');
    hamburger.setAttribute('aria-expanded', aberto);
  });
  $$('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('aberto'))
  );
})();
